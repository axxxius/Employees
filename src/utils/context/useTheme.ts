import { useContext } from 'react';

import { ThemeContext } from './themeContext.ts';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return { ...themeContext };
};
