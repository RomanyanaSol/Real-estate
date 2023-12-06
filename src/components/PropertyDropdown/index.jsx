import React, { useContext, useState } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from '../HouseContext';
import s from './style.module.css';

export default function PropertyDropdown() {

  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const open = isOpen
    ? (<RiArrowUpSLine className={s.dropdownIconSecondary} />)
    : (<RiArrowDownSLine className={s.dropdownIconSecondary} />)

  return (
    <Menu as='div' className={s.dropdown}>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className={s.dropdownBtn} >
        <RiHome5Line className={s.dropdownIconPrimary} />
        <div className={s.flex}>
          <div>
            <div className={s.country}>{property}</div>
            <div className={s.select}>Select your type</div>
          </div>
          <div>
            {open}
          </div>
        </div>
      </Menu.Button>

      <Menu.Items className={s.dropdownMenu}>
        {properties.map((property, index) => 
            <Menu.Item
              onClick={() => setProperty(property)}
              as='li'
              key={index}
              className={s.menuItem}>
              {property}
            </Menu.Item>
        )}
      </Menu.Items>

    </Menu>
  )
}
