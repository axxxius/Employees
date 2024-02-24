import { BreadCrumbs } from '@components';

import { EmployeeTable } from './employeeTable/employeeTable.tsx';
import cl from './employessPage.module.css';

export const EmployeesPage = () => {
  return (
    <div className={cl.container}>
      <BreadCrumbs />
      <EmployeeTable />
    </div>
  );
};
