import { FC } from 'react';

import cancel from '@assets/icons/cancel.svg';

import cl from './selectedFilter.module.css';

interface SelectedFilters {
  [key: string]: string;
}

export const SelectedFilters: FC<{ selectedFilters: SelectedFilters }> = ({ selectedFilters }) => (
  <div className={cl.selected_filters}>
    <p className={cl.title_filtes}>Выбранные фильтры:</p>
    {Object.keys(selectedFilters).map((key, index) => (
      <div className={cl.selected_items} key={index}>
        <img className={cl.cancel} src={cancel} alt='cancel' />
        <span>{`${selectedFilters[key]}`}</span>
      </div>
    ))}
  </div>
);
