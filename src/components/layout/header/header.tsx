import { Link } from 'react-router-dom';

import switchLightTheme from '@assets/images/1920 Свич темы.png';
import logo from '@assets/images/icons/logo.svg';
import switchDarkTheme from '@assets/images/Property 1=Moon.png';
import { useTheme } from '@utils';

import cl from './header.module.css';

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={cl.header}>
      <div>
        <Link to='/'>
          <img className={cl.logo} src={logo} alt='logo' />
        </Link>
      </div>

      <div className={cl.info_user_container}>
        <div className={cl.info_user}>
          <p>+ 7 922 296 00 85</p>
          <p>info@66bit.ru</p>
        </div>

        <div onClick={toggleTheme} className={cl.switch_theme}>
          <img src={theme === 'light' ? switchDarkTheme : switchLightTheme} alt='switch theme' />
        </div>
      </div>
    </div>
  );
};
