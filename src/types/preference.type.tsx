
export type PreferenceContextType = {
  changeTheme: (data: ChangeThemeType) => Promise<void>;
  theme: string;
}

export type ChangeThemeType = {
  theme: string;
}