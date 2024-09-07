import { createContext } from "react";
import { ThemeProvider as ThemeApp} from "styled-components/native";
import themes from "@/theme";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }: any) => {

  const theme = themes["dark"] || themes["dark"];

  return (
    <ThemeContext.Provider value={null}>
      <ThemeApp theme={theme}>
        {children}
      </ThemeApp>
    </ThemeContext.Provider>
  )
}