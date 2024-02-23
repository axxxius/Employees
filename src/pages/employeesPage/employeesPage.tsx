import { useRequestEmployeeQuery } from '@utils';

export const EmployeesPage = () => {
  const { data } = useRequestEmployeeQuery();

  console.log(data);
  return (
    <div>
      <div></div>
    </div>
  );
};
