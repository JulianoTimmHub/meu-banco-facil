import { concatUrl } from './api';

export const signIn = async ({ email, password }) => {
  const authApi = concatUrl('/auth');

  return await authApi.post('/signin', { email, password })
  .then((res) => res)
  .catch((res) => res);
}