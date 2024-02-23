import { FC } from 'react';
import { Link } from 'react-router-dom';

import cl from './employeeBody.module.css';

interface EmployeeBodyProps {
  id: number;
  name: string;
  position: string;
  phone: string;
  birthdate: string;
}

export const EmployeeBody: FC<EmployeeBodyProps> = ({ id, name, position, phone, birthdate }) => (
  <tbody className={cl.tbody}>
    <tr>
      <td>
        <Link className={cl.link} to={`/Employee/${id}`}>
          {name}
        </Link>
      </td>
      <td>
        <Link className={cl.link} to={`/Employee/${id}`}>
          {position}
        </Link>
      </td>
      <td>
        <Link className={cl.link} to={`/Employee/${id}`}>
          {phone}
        </Link>
      </td>
      <td className={cl.last_td}>
        <Link className={cl.link} to={`/Employee/${id}`}>
          {birthdate}
        </Link>
      </td>
    </tr>
  </tbody>
);
