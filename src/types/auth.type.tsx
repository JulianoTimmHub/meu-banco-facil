import { StatusOptionsType } from "./status.type";

export type AuthContextType = {
  signIn: (data: SignInFormType) => Promise<void>;
  signInResults: SignInResultType;
  resetAuthStatus: () => void;
}

export type SignInFormType = {
  email: string;
  password: string;
}

export type SignInResultType = {
  isLoading: boolean;
  statusSignIn: StatusOptionsType
}