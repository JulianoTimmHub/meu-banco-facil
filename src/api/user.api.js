import { concatUrl } from "./api";

export const registerUser = async ({ username, email, password }) => {
  const userApi = concatUrl('/user');

  console.log({username, email, password})

  return await userApi.post('/registerUser', { username, email, password })
  .then((res) => res)
  .catch((res) => res);
}