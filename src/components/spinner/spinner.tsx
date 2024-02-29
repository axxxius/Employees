import { FC } from 'react';

import cl from './spinner.module.css';

interface SpinnerProps {
  className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div className={`${cl.spinner_container} ${className}`}>
    <div className={cl.spinner}></div>
  </div>
);
