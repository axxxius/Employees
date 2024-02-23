import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import { Theme, ThemeContext, ThemeContextProps } from './themeContext.ts';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeContext] = useState<ThemeContextProps['theme']>(
    (localStorage.getItem('employees-theme') as Theme) || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  const setTheme = (theme: Theme) => {
    localStorage.setItem('employees-theme', theme);
    setThemeContext(theme);
  };

  if (theme === 'light') {
    document.body.setAttribute('dark', '');
  } else {
    document.body.removeAttribute('dark');
  }

  const value = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
