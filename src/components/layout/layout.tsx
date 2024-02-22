import { Outlet } from 'react-router-dom';

import { useTheme } from '@utils';

import { Header } from './header/header.tsx';

export const Layout = () => {
  const { theme } = useTheme();

  if (theme === 'light') {
    document.body.setAttribute('dark', '');
  } else {
    document.body.removeAttribute('dark');
  }

  return (
    <div className={theme}>
      <Header />
      <Outlet />
    </div>
  );
};
