import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  Auth, 
  User, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup,
  signOut, 
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../lib/firebase/config";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase/config";

interface AuthContextType {
  currentUser: (User & { role?: string }) | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<User>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<(User & { role?: string }) | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserRole = async (userId: string) => {
    const userDoc = await getDoc(doc(db, 'Users', userId));
    return userDoc.data()?.role || 'client';
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const role = await fetchUserRole(user.uid);
        setCurrentUser({ ...user, role });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const initUserDocument = async (user: User) => {
    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
      await setDoc(userRef, {
        email: user.email,
        createdAt: new Date(),
        lastLogin: new Date(),
        role: user.email?.endsWith('@admin.com') ? 'admin' : 'client',
        profileComplete: false,
      });
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const role = await fetchUserRole(userCredential.user.uid);
      setCurrentUser({ ...userCredential.user, role });
      toast.success("Logged in successfully");
      navigate(role === 'admin' ? '/admin/dashboard' : '/');
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to log in. Please check your credentials.");
      throw error;
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await initUserDocument(userCredential.user);
      const role = await fetchUserRole(userCredential.user.uid);
      setCurrentUser({ ...userCredential.user, role });
      toast.success("Account created successfully");
      navigate('/');
      return userCredential.user;
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Failed to create account.");
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      await initUserDocument(userCredential.user);
      const role = await fetchUserRole(userCredential.user.uid);
      setCurrentUser({ ...userCredential.user, role });
      toast.success("Logged in successfully with Google");
      navigate(role === 'admin' ? '/admin/dashboard' : '/');
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Failed to log in with Google.");
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out.");
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent");
    } catch (error) {
      console.error("Reset password error:", error);
      toast.error("Failed to send reset email.");
      throw error;
    }
  };

  const value = {
    currentUser,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};