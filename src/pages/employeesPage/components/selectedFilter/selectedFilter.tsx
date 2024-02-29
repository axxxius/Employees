import { FC } from 'react';

import closeBlack from '@assets/icons/close-black.svg';
import closeWhite from '@assets/icons/close-white.svg';
import { useTheme } from '@utils';

import cl from './selectedFilter.module.css';

interface SelectedFilters {
  [key: string]: string;
}

interface Props {
  selectedFilters: SelectedFilters;
  onFilterRemove: (filterKey: string) => void;
}

export const SelectedFilter: FC<Props> = ({ selectedFilters, onFilterRemove }) => {
  const { theme } = useTheme();

  return (
    <div className={cl.selected_filters}>
      <p className={cl.title_filtes}>Выбранные фильтры:</p>
      {Object.keys(selectedFilters).map((key) => (
        <div className={cl.selected_items} key={key}>
          <img
            className={cl.cancel}
            src={theme === 'light' ? closeWhite : closeBlack}
            alt='cancel'
            onClick={() => onFilterRemove(key)}
          />
          <span>{`${selectedFilters[key]}`}</span>
        </div>
      ))}
    </div>
  );
};
