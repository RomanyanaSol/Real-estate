import React, { useContext, useState } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from '../HouseContext';
import s from './style.module.css';

export default function CountryDropdown() {

  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const open = isOpen
    ? (<RiArrowUpSLine className={s.dropdownIconSecondary} />)
    : (<RiArrowDownSLine className={s.dropdownIconSecondary} />)

  return (
    <Menu as='div' className={s.dropdown}>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className={s.dropdownBtn} >
        <RiMapPinLine className={s.dropdownIconPrimary} />
        <div className={s.flex}>
          <div>
            <div className={s.country}>{country}</div>
            <div className={s.select}>Select your place</div>
          </div>
          <div>
            {open}
          </div>
        </div>
      </Menu.Button>

      <Menu.Items className={s.dropdownMenu}>
        {countries.map((country, index) => 
            <Menu.Item
              onClick={() => setCountry(country)}
              as='li'
              key={index}
              className={s.menuItem}>
              {country}
            </Menu.Item>
        )}
      </Menu.Items>

    </Menu>
  )
}
