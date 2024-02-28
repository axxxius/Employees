import cl from './employeeSearch.module.css';

export const EmployeeSearch = () => (
  <div className={cl.search_input_container}>
    <input className={cl.search_input} placeholder='Поиск' type='text' />
  </div>
);
