import { createContext } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { ThemeProvider } from "./themeContext";
import { PreferenceProvider } from "./preferenceContext";

export const RootContext = createContext(null);

const queryClient = new QueryClient();

export const RootProvider = ({ children }: any) => {
  useReactQueryDevTools(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <PreferenceProvider>
        <ThemeProvider>
          <RootContext.Provider value={null}>
            {children}
          </RootContext.Provider>
        </ThemeProvider>
      </PreferenceProvider>
    </QueryClientProvider>
  )
}