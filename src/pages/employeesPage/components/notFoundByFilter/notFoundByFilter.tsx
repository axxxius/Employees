import searchIcon from '@assets/icons/search.svg';

import cl from './employeePageByFilter.module.css';

export const NotFoundByFilter = () => {
  return (
    <div className={cl.container}>
      <img src={searchIcon} alt='search' />
      <p className={cl.error_message}>Ничего не найдено</p>
    </div>
  );
};
