import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useRequestEmployeeQuery } from '@utils';

import { EmployeeBody } from './employeeBody/employeeBody.tsx';
import cl from './employeeTable.module.css';

export const EmployeeTable = ({ filters }) => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useRequestEmployeeQuery(filters);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div style={{ padding: '0 180px' }}>
      <table className={cl.table}>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Должность</th>
            <th>Телефон</th>
            <th className={cl.last_cell}>Дата рождения</th>
          </tr>
        </thead>
        {data?.pages.map((page) =>
          page.data.map((employee: EmployeeCompany) => (
            <EmployeeBody
              innerRef={ref}
              key={employee.id}
              id={employee.id}
              name={employee.name}
              position={employee.position}
              phone={employee.phone}
              birthdate={employee.birthdate}
            />
          ))
        )}
      </table>
    </div>
  );
};
