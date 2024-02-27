import { FC, useRef, useState } from 'react';

import arrowBottom from '@assets/icons/arrow-bottom.svg';

import { useOnClickOutside } from './hooks/useOnClickOutside.ts';
import cl from './select.module.css';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  onChange: (selectedValues: string | string[]) => void;
  multi?: boolean;
}

export const Select: FC<SelectProps> = ({ label, options, onChange, multi = false }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[] | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setOpenMenu(false);
  });

  const handeleOptionClick = (value: string) => {
    if (multi) {
      setSelectedValues((prevValues) => {
        if (prevValues?.includes(value)) {
          return prevValues.filter((v) => v !== value);
        } else {
          return [...(prevValues || []), value];
        }
      });
    } else {
      setSelectedValues(value);
    }
    onChange(value);
  };

  return (
    <div ref={ref} className={cl.container}>
      <div className={cl.option} onClick={() => setOpenMenu(!openMenu)}>
        <label className={openMenu ? cl.label : ''}>{label}</label>
        <img
          className={openMenu ? cl.arrow_top : cl.arrow_bottom}
          alt='arrow-bottom'
          src={arrowBottom}
        />
      </div>

      <div>
        <ul className={`${cl.menu} ${openMenu ? cl.active : ''}`}>
          {options.map((option) => (
            <li className={cl.menu_element} key={option.label}>
              <label htmlFor={option.value} id={option.value}>
                {option.label}
              </label>
              <input
                id={option.value}
                className={cl.check_input}
                type={multi ? 'checkbox' : 'radio'}
                checked={
                  multi ? selectedValues?.includes(option.value) : selectedValues === option.value
                }
                onChange={() => handeleOptionClick(option.value)}
                readOnly
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
