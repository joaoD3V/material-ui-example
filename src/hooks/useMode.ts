import { ThemeContext } from 'contexts/ThemeContext';
import { useContext } from 'react';

export function useMode() {
  const value = useContext(ThemeContext);

  return value;
}
