import { FC, FormEvent, KeyboardEvent } from 'react';

import cl from './employeeSearch.module.css';

interface EmployeeSearchProps {
  setValue: (value: string) => void;
  handleSearch: (e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLInputElement>) => void;
}

export const EmployeeSearch: FC<EmployeeSearchProps> = ({ setValue, handleSearch }) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className={cl.search_input_container}>
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
