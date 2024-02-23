import moon from '@assets/images/icons/moon.svg';
import sun from '@assets/images/icons/sun.svg';
import { useTheme } from '@utils';

import cl from './switchTheme.module.css';

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={cl.switch_theme}>
      <input onChange={toggleTheme} type='checkbox' id='toggle' className={cl.toggle_checkbox} />
      <div className={cl.toggle_container}>
        <label className={cl.label} htmlFor='toggle'>
          <div className={cl.circle}>
            <img className={cl.sun} src={sun} alt='sun' />
            <img className={cl.moon} src={moon} alt='moon' />
          </div>
        </label>
      </div>
    </div>
  );
};
