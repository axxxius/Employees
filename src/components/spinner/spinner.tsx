import { FC } from 'react';

import cl from './spinner.module.css';

export const Spinner: FC = () => (
  <div className={cl.spinner_container}>
    <div className={cl.spinner}></div>
  </div>
);
