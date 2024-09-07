import { useMutation } from "@tanstack/react-query"
import { changeTheme } from "../../api/preference.api";

export const usePreferenceMutation = () => {
  return useMutation({
    mutationKey: 'change-theme',
    mutationFn: changeTheme
  });
}