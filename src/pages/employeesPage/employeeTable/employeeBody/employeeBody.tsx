import { FC, Ref } from 'react';
import { useNavigate } from 'react-router-dom';

import cl from './employeeBody.module.css';

interface EmployeeBodyProps {
  id: number;
  name: string;
  position: string;
  phone: string;
  birthdate: string;
  innerRef?: Ref<HTMLTableSectionElement>;
}

export const EmployeeBody: FC<EmployeeBodyProps> = ({
  innerRef,
  id,
  name,
  position,
  phone,
  birthdate
}) => {
  const navigate = useNavigate();

  return (
    <tbody ref={innerRef} className={cl.tbody} onClick={() => navigate(`/Employee/${id}`)}>
      <tr>
        <td>{name}</td>
        <td>{position}</td>
        <td>{phone}</td>
        <td className={cl.last_td}>{birthdate}</td>
      </tr>
    </tbody>
  );
};
