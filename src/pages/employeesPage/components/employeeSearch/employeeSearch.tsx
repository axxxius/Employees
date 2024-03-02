import { FC, FormEvent, KeyboardEvent } from 'react';

import cl from './employeeSearch.module.css';

interface EmployeeSearchProps {
  setValue: (value: string) => void;
  handleSearch: (e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

export const EmployeeSearch: FC<EmployeeSearchProps> = ({ setValue, handleSearch, className }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className={`${cl.search_input_container} ${className}`}>
      <input
        className={cl.search_input}
        placeholder='Поиск'
        type='text'
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
