import searchIcon from '@assets/icons/search.svg';

import cl from './employeePageByFilter.module.css';

export const NotFoundByFilter = () => (
  <div className={cl.container}>
    <img src={searchIcon} alt='search' />
    <p className={cl.error_message}>По данным фильтрам ничего не найдено</p>
  </div>
);
