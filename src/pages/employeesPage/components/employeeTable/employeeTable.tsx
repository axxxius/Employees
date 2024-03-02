import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { EmployeeBody } from './employeeBody/employeeBody.tsx';
import cl from './employeeTable.module.css';

interface EmployeeTable {
  id: number;
  name: string;
  position: string;
  phone: string;
  birthdate: string;
}

interface Page {
  data: EmployeeTable[];
}

interface Pages {
  pages: Page[];
}

interface EmployeeTableProps {
  data: Pages | null;
  fetchNextPage: () => void;
}

export const EmployeeTable: FC<EmployeeTableProps> = ({ data, fetchNextPage }) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div className={cl.container}>
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
          page.data.map((employee) => (
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
