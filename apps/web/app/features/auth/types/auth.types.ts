// apps/web/src/features/auth/types/auth.types.ts
import { User } from "firebase/auth";

export type AuthUser = User | null;

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = LoginFormData & {
  confirmPassword: string;
};