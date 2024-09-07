import { StatusOptionsType } from "./status.type";

export type UserContextType = {
  registerUser: (data: RegisterUserFormType) => Promise<void>;
  registerResults: RegisterResultType;
  resetUserStatus: () => void;
} 

export type RegisterUserFormType = {
  username: string;
  email: string;
  password: string;
}

export type RegisterResultType = {
  isLoading: boolean;
  statusRegister: StatusOptionsType;
}

export type UserInformationType = {
  username: string | null;
  email: string | null;
}