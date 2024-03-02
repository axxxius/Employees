import { FC } from 'react';
import { Link } from 'react-router-dom';

import arrowRight from '@assets/icons/arrow-right.svg';
import { ROUTES } from '@utils';

import cl from './breadCrumbs.module.css';

interface BreadCrumbsProps {
  name?: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ name }) => {
  return (
    <div className={cl.bread_crumbs}>
      <Link className={cl.nav_link} to={ROUTES.MAIN}>
        Главная
        <img className={cl.arrow_right} src={arrowRight} alt='arrowRight' />
        Список cотрудников
      </Link>

      {name && (
        <div className={cl.container}>
          <img className={cl.arrow_right} src={arrowRight} alt='arrowRight' />
          <p className={cl.nav_link}>{name}</p>
        </div>
      )}
    </div>
  );
};
