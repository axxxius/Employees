import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import arrowRight from '@assets/images/icons/arrow-right.svg';

import cl from './breadCrumbs.module.css';

interface BreadCrumbsProps {
  id?: number;
  name?: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ id, name }) => {
  const location = useLocation();

  return (
    <div className={cl.bread_crumbs}>
      <Link className={cl.nav_link} to='/'>
        Главная
        <img src={arrowRight} alt='arrowRight' />
        Список cотрудников
      </Link>

      {id && location.pathname.includes('Employee') && (
        <>
          <img src={arrowRight} alt='arrowRight' />
          <Link className={cl.nav_link} to={`/Employee/${id}`}>
            {name}
          </Link>
        </>
      )}
    </div>
  );
};
