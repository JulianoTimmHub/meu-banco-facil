import { createContext, useEffect, useState } from "react";
import { AuthContextType, SignInFormType } from "../types/auth.type";
import { StatusOptionsType } from "../types/status.type";
import { useSignInMutation } from '../hooks/mutations/useSignInMutation.hook';
import { ESnackbarMessage } from "@/components/snackbar/snackbar-message.enum";
import { UserInformationType } from "../types/user.type";

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusSignIn, setStatusSignIn] = useState<StatusOptionsType>({ message: null, color: ''});
  const [user, setUser] = useState<UserInformationType>({username: null, email: null});

  const {
    mutate: mutateSignIn,
    isError: isErrorSignIn,
    data: dataSignIn,
    error: errorSignIn,
    isSuccess: isSuccessSignIn,
    isLoading: isLoadingSignIn
  } = useSignInMutation();

  useEffect(() => {
    if (isLoadingSignIn) {
      setIsLoading(true);
    }

    if (isSuccessSignIn && dataSignIn) {
      if (dataSignIn?.response?.status === 404) {
        setStatusSignIn({message: ESnackbarMessage.SIGN_IN.NOT_FOUND, color: 'error'});
      } else if (dataSignIn?.response?.status === 401) {
        setStatusSignIn({message: ESnackbarMessage.SIGN_IN.ERROR, color: 'error'});
      } else {
        setStatusSignIn({message: ESnackbarMessage.SIGN_IN.SUCCESS, color: 'success'});
        setUser(dataSignIn?.data);
      }
      setIsLoading(false);
    }

    if (isErrorSignIn || errorSignIn) {
      setIsLoading(false);
      setStatusSignIn({message: ESnackbarMessage.SIGN_IN.NOT_FOUND, color: 'error'});
    }
  }, [
    isErrorSignIn,
    dataSignIn,
    errorSignIn,
    isSuccessSignIn,
    isLoadingSignIn,
    setIsLoading,
    setStatusSignIn
  ]);

  const signIn = async ({ 
    email, password 
  }: SignInFormType): Promise<void> => {
    mutateSignIn({ email, password });
  }

  const resetAuthStatus = (): void => {
    setStatusSignIn({message: null, color: ''});
  };

  const value = {
    signIn,
    signInResults: {
      isLoading,
      statusSignIn
    },
    resetAuthStatus,
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}