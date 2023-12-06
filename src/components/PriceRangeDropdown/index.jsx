import React, { useContext, useState } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from '../HouseContext';
import s from './style.module.css';

export default function PriceRangeDropdown() {

  const { price, setPrice } = useContext(HouseContext);

  const prices = [
    { value: 'Price range (any)' },
    { value: '100000 - 130000' },
    { value: '130000 - 160000' },
    { value: '160000 - 190000' },
    { value: '190000 - 220000' },
    { value: '10000 - 30000' },
    { value: '30000 - 40000' }
  ];

  const [isOpen, setIsOpen] = useState(false);

  const open = isOpen
    ? (<RiArrowUpSLine className={s.dropdownIconSecondary} />)
    : (<RiArrowDownSLine className={s.dropdownIconSecondary} />)

  return (
    <Menu as='div' className={s.dropdown}>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className={s.dropdownBtn} >
        <RiWallet3Line className={s.dropdownIconPrimary} />
        <div className={s.flex}>
          <div>
            <div className={s.country}>{price}</div>
            <div className={s.select}>Choose price range</div>
          </div>
          <div>
            {open}
          </div>
        </div>
      </Menu.Button>

      <Menu.Items className={s.dropdownMenu}>
        {prices.map((price, index) =>
          <Menu.Item
            onClick={() => setPrice(price.value)}
            as='li'
            key={index}
            className={s.menuItem}>
            {price.value}
          </Menu.Item>
        )}
      </Menu.Items>

    </Menu>
  )
}
