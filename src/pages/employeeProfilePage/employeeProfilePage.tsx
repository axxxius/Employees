import { useParams } from 'react-router-dom';

import { BreadCrumbs, Spinner } from '@components';
import { useRequestEmployeeQueryById } from '@utils';

import cl from './employeeProfilePage.module.css';

export const EmployeeProfilePage = () => {
  const { id } = useParams();
  const { data, isLoading } = useRequestEmployeeQueryById({ id });

  if (isLoading || !data) return <Spinner />;

  return (
    <div>
      <BreadCrumbs name={data?.name} />

      <div className={cl.profile_container}>
        <div className={cl.employee_info_container}>
          <div className={cl.employee_image_container}>
            <img className={cl.employees_image} src={data?.photo} alt='userImage' />
          </div>
          <div>
            <h1 className={cl.name}>{data?.name}</h1>
            <h2 className={cl.position}>{data?.position}</h2>
            <ul className={cl.ul_profile}>
              {data?.stack.map((stack, index) => (
                <li className={cl.profile_element} key={index}>
                  {stack}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cl.line}></div>
        <div className={cl.con}>
          <div className={cl.detailed_info_container}>
            <h3 className={cl.basic_information}>Основная страница</h3>
            <div>
              <div className={cl.detailed_info}>
                <p>Контактный телефон:</p>
                <p>{data?.phone}</p>
              </div>
              <div className={cl.detailed_info}>
                <p className={cl.paragraph}>Дата рождения:</p>
                <p className={cl.paragraph}>{data?.birthdate}</p>
              </div>
              <div className={cl.detailed_info}>
                <p className={cl.paragraph}>Дата устройства:</p>
                <p className={cl.paragraph}>{data?.dateOfEmployment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
