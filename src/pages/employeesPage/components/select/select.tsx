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
  onChange: (selectedValue: string) => void;
}

export const Select: FC<SelectProps> = ({ label, options, onChange }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setOpenMenu(false);
  });

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
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
                type='radio'
                checked={selectedValue === option.value}
                onChange={() => handleOptionClick(option.value)}
                readOnly
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
