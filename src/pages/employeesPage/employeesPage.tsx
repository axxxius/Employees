import { BreadCrumbs } from '@components';

import { EmployeeTable } from './employeeTable/employeeTable.tsx';
import cl from './employessPage.module.css';
import { Select } from './select/select.tsx';
import { GENDERS, POSITIONS, STACK } from '@utils';

export const EmployeesPage = () => {
  return (
    <div className={cl.container}>
      <BreadCrumbs />
      <div className={cl.select_container}>
        <h1 className={cl.title_page}>Список сотрудников</h1>
        <div className={cl.select_list}>
          <Select label='Должность' options={POSITIONS} />
          <Select label='Пол' options={GENDERS} />
          <Select label='Стек технологий' options={STACK} />
        </div>
      </div>
      <EmployeeTable />
    </div>
  );
};
