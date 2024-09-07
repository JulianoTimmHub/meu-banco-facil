import { useContext } from 'react';
import { PreferenceContext } from '../../contexts/preferenceContext';

export const usePreferenceContext = () => {
  const {
    changeTheme
  } = useContext(PreferenceContext);

  return {
    changeTheme
  }
}