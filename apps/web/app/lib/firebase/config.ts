import { initializeApp, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore,getDoc, Firestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { getDatabase, Database } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
};

let app: FirebaseApp;

try {
  app = getApp();
} catch {
  app = initializeApp(firebaseConfig);
}

const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);
const realtimeDb: Database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
  login_hint: 'user@example.com'
});

const initUserDocument = async (user: User) => {
  const userRef = doc(db, 'users', user.uid);
  const userDoc = await getDoc(userRef);
  
  if (!userDoc.exists()) {
    await setDoc(userRef, {
      email: user.email,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      role: user.email?.endsWith('@admin.com') ? 'admin' : 'client',
      profileComplete: false,
      metadata: {
        creationTime: user.metadata.creationTime,
        lastSignInTime: user.metadata.lastSignInTime
      }
    });
  } else {
    // Update last login time
    await setDoc(userRef, {
      lastLogin: serverTimestamp()
    }, { merge: true });
  }
};


export const updateUserRole = async (userId: string, role: string) => {
  const userRef = doc(db, 'Users', userId);
  await setDoc(userRef, { role }, { merge: true });
};

export { 
  app, 
  auth, 
  db, 
  storage, 
  realtimeDb, 
  googleProvider, 
  initUserDocument,
  serverTimestamp 
};