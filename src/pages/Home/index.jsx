import React from 'react';
import Banner from '../../components/Banner';
import s from './style.module.css';
import HouseList from '../../components/HouseList';

export default function Home() {
  return (
    <div className={s.container}>
      <Banner />
      <HouseList />
    </div>
  )
}
