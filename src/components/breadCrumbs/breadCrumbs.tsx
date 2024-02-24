import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import arrowRight from '@assets/icons/arrow-right.svg';

import cl from './breadCrumbs.module.css';
import { ROUTES } from '@utils';

interface BreadCrumbsProps {
  name?: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ name }) => {
  const location = useLocation();

  return (
    <div className={cl.bread_crumbs}>
      <Link className={cl.nav_link} to={ROUTES.MAIN}>
        Главная
        <img src={arrowRight} alt='arrowRight' />
        Список cотрудников
      </Link>

      {name && location.pathname.includes('Employee') && (
        <>
          <img src={arrowRight} alt='arrowRight' />
          <p className={cl.nav_link}>{name}</p>
        </>
      )}
    </div>
  );
};
