import { Link } from 'react-router-dom';

import logo from '@assets/images/icons/logo.svg';

import { SwitchTheme } from './switchTheme/switchTheme.tsx';
import cl from './header.module.css';

export const Header = () => (
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

      <SwitchTheme />
    </div>
  </div>
);
