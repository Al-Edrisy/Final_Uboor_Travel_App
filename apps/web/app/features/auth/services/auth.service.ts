// apps/web/src/features/auth/services/auth.service.ts
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User,
  AuthError,
  UserCredential,
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase/config';

const handleAuthError = (error: unknown): never => {
  const authError = error as AuthError;
  const errorMap: Record<string, string> = {
    'auth/invalid-email': 'Invalid email address',
    'auth/user-disabled': 'Account disabled',
    'auth/user-not-found': 'Account not found',
    'auth/wrong-password': 'Incorrect password',
    'auth/email-already-in-use': 'Email already in use',
    'auth/weak-password': 'Password must be at least 6 characters',
    'auth/operation-not-allowed': 'Operation not allowed',
    'auth/too-many-requests': 'Too many attempts, try again later',
    'auth/popup-closed-by-user': 'Popup closed before completing login',
    'auth/network-request-failed': 'Network error, please check your connection',
    'auth/popup-blocked': 'Popup blocked by browser, please allow popups',
  };

  throw new Error(errorMap[authError.code] || 'Authentication failed');
};

export const AuthService = {
  async loginWithEmail(email: string, password: string): Promise<User> {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      return handleAuthError(error);
    }
  },

  async loginWithGoogle(): Promise<User> {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      return handleAuthError(error);
    }
  },

  async register(email: string, password: string): Promise<User> {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      return handleAuthError(error);
    }
  },

  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error('Logout failed. Please try again.');
    }
  },

  async resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      handleAuthError(error);
    }
  },

  getCurrentUser(): Promise<User | null> {
    return new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe();
        resolve(user);
      });
    });
  },
};