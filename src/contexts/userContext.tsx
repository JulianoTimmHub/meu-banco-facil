import { createContext, useEffect, useState } from "react";
import { useRegisterUserMutation } from "../hooks/mutations/useRegisterUserMutation.hook";
import { RegisterUserFormType, UserContextType } from "../types/user.type";
import { StatusOptionsType } from "../types/status.type";
import { ESnackbarMessage } from '../../components/snackbar/snackbar-message.enum';

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusRegister, setStatusRegister] = useState<StatusOptionsType>({ message: null, color: ''});

  const {
    mutate: mutateRegisterUser,
    isError: isErrorRegister,
    data: dataRegister,
    error: errorRegister,
    isSuccess: isSuccessRegister,
    isLoading: isLoadingRegister
  } = useRegisterUserMutation();

  useEffect(() => {
    if (isLoadingRegister) {
      setIsLoading(true);
    }

    if (isSuccessRegister && dataRegister) {
      if (dataRegister?.response?.status === 409) {
        setStatusRegister({message: ESnackbarMessage.REGISTER_USER.ALREADY_REGISTER, color: 'error'});
      } else {
        setStatusRegister({message: ESnackbarMessage.REGISTER_USER.SUCCESS, color: 'success'});
      }
      setIsLoading(false);
    }

    if (isErrorRegister || errorRegister) {
      setIsLoading(false);
      setStatusRegister({message: ESnackbarMessage.REGISTER_USER.ERROR, color: 'error'});
    }
  }, [
    isErrorRegister,
    dataRegister,
    errorRegister,
    isSuccessRegister,
    isLoadingRegister,
    setIsLoading,
    setStatusRegister
  ]);

  const registerUser = async ({ 
    username, email, password 
  }: RegisterUserFormType): Promise<void> => {
    mutateRegisterUser({ username, email, password });
  }

  const resetUserStatus = (): void => {
    setStatusRegister({message: null, color: ''});
  };

  const value = {
    registerUser,
    registerResults: {
      isLoading,
      statusRegister
    },
    resetUserStatus
  };

  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}