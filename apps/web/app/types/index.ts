export type UserRole = 'admin' | 'client' | 'superadmin';

export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role?: UserRole;
  lastLogin?: string;
  createdAt?: string;
}