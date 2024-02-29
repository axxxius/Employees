import { FC, FormEvent, useState } from 'react';

import { BreadCrumbs, Spinner } from '@components';
import { GENDER, POSITION, STACK, useRequestEmployeeQuery } from '@utils';

import {
  EmployeeSearch,
  EmployeeTable,
  NotFoundByFilter,
  Select,
  SelectedFilter
} from './components';
import cl from './employessPage.module.css';

interface SelectedFilters {
  [key: string]: string;
}

export const EmployeesPage: FC = () => {
  const [value, setValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const [searchParams, setSearchParams] = useState<SelectedFilters>({});

  const { data, fetchNextPage, isLoading } = useRequestEmployeeQuery(searchParams);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearchParams({ ...selectedFilters, name: value });
  };

  const handleFilterRemove = (filterKey: string) => {
    const updatedFilters = { ...selectedFilters };
    delete updatedFilters[filterKey];
    setSelectedFilters(updatedFilters);
  };

  return (
    <div className={cl.container}>
      <BreadCrumbs />

      <form onSubmit={handleSearch}>
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
        <EmployeeSearch setValue={setValue} handleSearch={handleSearch} />
        <div className={cl.filters_container}>
          <div className={cl.filters}>
            <SelectedFilter selectedFilters={selectedFilters} onFilterRemove={handleFilterRemove} />
            <button type='submit' className={cl.search_button}>
              Найти
            </button>
          </div>
        </div>
      </form>

      <div className={cl.employee_table_container}>
        {isLoading ? (
          <Spinner className={cl.spinner} />
        ) : data && data.pages.some((page) => page.data.length > 0) ? (
          <EmployeeTable data={data} fetchNextPage={fetchNextPage} />
        ) : (
          <NotFoundByFilter />
        )}
      </div>
    </div>
  );
};
