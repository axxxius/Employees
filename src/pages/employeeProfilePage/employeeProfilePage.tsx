import { useParams } from 'react-router-dom';

import { BreadCrumbs } from '@components';
import { useRequestEmployeeQueryById } from '@utils';

import cl from './employeeProfilePage.module.css';

export const EmployeeProfilePage = () => {
  const { id } = useParams();
  const { data } = useRequestEmployeeQueryById({ id });
  console.log(data);

  return (
    <div className={cl.container}>
      <BreadCrumbs id={data?.id} name={data?.name} />
    </div>
  );
};
