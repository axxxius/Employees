import { FC, useState } from 'react';

import cancel from '@assets/icons/cancel.svg';
import { BreadCrumbs } from '@components';
import { GENDER, POSITION, STACK } from '@utils';

import { EmployeeTable } from './employeeTable/employeeTable.tsx';
import { Select } from './select/select.tsx';
import cl from './employessPage.module.css';

export const EmployeesPage: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({});

  return (
    <div className={cl.container}>
      <BreadCrumbs />
      <div className={cl.select_container}>
        <h1 className={cl.title_page}>Список сотрудников</h1>
        <div className={cl.select_list}>
          <Select
            label='Должность'
            options={POSITION}
            onChange={(selectedValue) => setSelectedFilters({ position: selectedValue })}
          />
          <Select
            label='Пол'
            options={GENDER}
            onChange={(selectedValue) => setSelectedFilters({ gender: selectedValue })}
          />
          <Select
            label='Стек технологий'
            options={STACK}
            onChange={(selectedValue) => setSelectedFilters({ stack: selectedValue })}
            multi={true}
          />
        </div>
      </div>

      <div className={cl.filters_container}>
        <div className={cl.filters}>
          <div className={cl.selected_filters}>
            <p className={cl.title_filtes}>Выбранные фильтры:</p>
            <div className={cl.selected_items}>
              <img style={{ paddingRight: '10px' }} src={cancel} alt='cancel' />
              <span>fullstack</span>
            </div>
          </div>
          <button className={cl.search_button}>Найти</button>
        </div>
      </div>
      <EmployeeTable filters={selectedFilters} />
    </div>
  );
};
