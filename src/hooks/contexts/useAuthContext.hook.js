import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

export const useAuthContext = () => {
  const {
    signIn,
    signInResults,
    resetAuthStatus,
    user
  } = useContext(AuthContext);

  return {
    signIn,
    signInResults,
    resetAuthStatus,
    user
  }
}