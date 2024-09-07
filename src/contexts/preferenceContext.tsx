import { createContext, useEffect, useState } from "react";
import { usePreferenceMutation } from "../hooks/mutations/usePreferenceMutation.hook";
import { ChangeThemeType, PreferenceContextType } from "../types/preference.type";

export const PreferenceContext = createContext<PreferenceContextType>({} as PreferenceContextType);

export const PreferenceProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("");

  const {
    mutate: mutateChangeTheme,
    isError: isErrorChangeTheme,
    data: dataChangeTheme,
    error: errorChangeTheme,
    isSuccess: isSuccessChangeTheme
  } = usePreferenceMutation();

  const changeTheme = async ({
    theme
  }: ChangeThemeType): Promise<void> => {
    mutateChangeTheme({ theme });
  }

  if (theme == "") {
    changeTheme({theme});
  }

  useEffect(() => {
    if (isSuccessChangeTheme && dataChangeTheme) {
      if (dataChangeTheme?.response?.status === 409) {
        console.log({erro409: dataChangeTheme})
        setTheme("light")
        // setStatusChangeTheme({ message: ESnackbarMessage.REGISTER_USER.ALREADY_REGISTER, color: 'error' });
      } else {
        console.log({dataChangeTheme: dataChangeTheme?.response})
        setTheme(dataChangeTheme?.data)
        // setTheme(dataChangeTheme?.response)
        // setStatusChangeTheme({ message: ESnackbarMessage.REGISTER_USER.SUCCESS, color: 'success' });
      }
    }

    if (isErrorChangeTheme || errorChangeTheme) {
      console.log({erro: dataChangeTheme})
      // setStatusChangeTheme({ message: ESnackbarMessage.REGISTER_USER.ERROR, color: 'error' });
    }
  }, [
    isErrorChangeTheme,
    dataChangeTheme,
    errorChangeTheme,
    isSuccessChangeTheme,
    setTheme
  ]);

  const value = {
    changeTheme,
    theme
  }

  return (
    <PreferenceContext.Provider value={value}>
      {children}
    </PreferenceContext.Provider>
  )
}