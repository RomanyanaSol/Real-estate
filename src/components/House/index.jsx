import React from 'react';
import s from './style.module.css';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

export default function House({ image, type, country, address, bedrooms, bathrooms, surface, price }) {
  return (
    <div className={s.container}>
      <img src={image} alt="House" className={s.img} />
      <div className={s.underImg}>
        <div className={s.type}>{type}</div>
        <div className={s.country}>{country}</div>
      </div>
      <div className={s.address}>{address}</div>
      <div className={s.flex}>
        <div className={s.iconBedrooms}>
          <div className={s.icon}><BiBed /></div>
          <div>{bedrooms}</div>
        </div>
        <div className={s.iconBedrooms}>
          <div className={s.icon}><BiBath /></div>
          <div>{bathrooms}</div>
        </div>
        <div className={s.iconBedrooms}>
          <div className={s.icon}><BiArea /></div>
          <div>{surface}</div>
        </div>
      </div>
      <div className={s.price}>{price}</div>
    </div>
  )
}
