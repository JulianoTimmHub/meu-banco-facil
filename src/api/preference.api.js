import { concatUrl } from "./api";

export const changeTheme = async ({ theme }) => {
  const userApi = concatUrl('/preference');

  console.log({theme})

  return await userApi.post('/changeTheme', { theme })
  .then((res) => res)
  .catch((res) => res);
}