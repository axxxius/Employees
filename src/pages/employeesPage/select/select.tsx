import { FC, useRef, useState } from 'react';
import cl from './select.module.css';
import arrowBottom from '@assets/icons/arrow-bottom.svg';
import arrowTop from '@assets/icons/arrow-top.svg';
import { useOnClickOutside } from './hooks/useOnClickOutside.ts';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Option[];
}

export const Select: FC<SelectProps> = ({ label, options }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setOpenMenu(false);
  });

  return (
    <div ref={ref} className={cl.container}>
      <div className={cl.option}>
        <label className={openMenu ? cl.label : ''}>{label}</label>
        <img
          alt='arrow-bottom'
          src={openMenu ? arrowTop : arrowBottom}
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>

      <div>
        <ul className={`${cl.menu} ${openMenu ? cl.active : ''}`}>
          {options.map((option) => (
            <li className={cl.menu_element} key={option.label}>
              <label htmlFor='custom_checkbox' id='id_input'>
                {option.label}
              </label>
              <input id='custom_checkbox' className={cl.check_input} type='checkbox' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
