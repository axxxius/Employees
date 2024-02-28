import { FC, useState } from 'react';

import { BreadCrumbs } from '@components';
import { GENDER, POSITION, STACK, useRequestEmployeeQuery } from '@utils';

import { EmployeeSearch } from './employeeSearch/employeeSearch.tsx';
import { EmployeeTable } from './employeeTable/employeeTable.tsx';
import { Select } from './select/select.tsx';
import { SelectedFilters } from './selectedFilter/selectedFilter.tsx';
import cl from './employessPage.module.css';

export const EmployeesPage: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchParams, setSearchParams] = useState({});

  const { data, fetchNextPage } = useRequestEmployeeQuery(searchParams);

  const handleSearch = () => {
    setSearchParams(selectedFilters);
  };

  return (
    <div className={cl.container}>
      <BreadCrumbs />

      <div className={cl.select_container}>
        <h1 className={cl.title_page}>Список сотрудников</h1>
        <div className={cl.select_list}>
          <Select
            label='Должность'
            options={POSITION}
            onChange={(selectedValue) =>
              setSelectedFilters({ ...selectedFilters, position: selectedValue })
            }
          />
          <Select
            label='Пол'
            options={GENDER}
            onChange={(selectedValue) =>
              setSelectedFilters({ ...selectedFilters, gender: selectedValue })
            }
          />
          <Select
            label='Стек технологий'
            options={STACK}
            onChange={(selectedValue) =>
              setSelectedFilters({ ...selectedFilters, stack: selectedValue })
            }
          />
        </div>
      </div>

      <EmployeeSearch />

      <div className={cl.filters_container}>
        <div className={cl.filters}>
          <SelectedFilters selectedFilters={selectedFilters} />
          <button className={cl.search_button} onClick={handleSearch}>
            Найти
          </button>
        </div>
      </div>
      <EmployeeTable data={data} fetchNextPage={fetchNextPage} />
    </div>
  );
};
