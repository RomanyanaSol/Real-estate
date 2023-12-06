import React, { useContext } from 'react';
import CountryDropdown from '../CountryDropdown';
import PropertyDropdown from '../PropertyDropdown';
import PriceRangeDropdown from '../PriceRangeDropdown';
import { RiSearch2Line } from 'react-icons/ri';
import s from './style.module.css';
import { HouseContext } from '../HouseContext';

export default function Search() {

  const {handleClick} = useContext(HouseContext);

  return (
    <div className={s.searchContainer}>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button className={s.button} onClick={() => handleClick()}>
        <RiSearch2Line />
      </button>
    </div>
  )
}
