import React, { useContext } from 'react';
import s from './style.module.css';
import House from '../House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';
import { HouseContext } from '../HouseContext';

export default function HouseList() {

  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return <ImSpinner2 className={s.icon}/>
  }

  if (houses.length < 1) {
    return <div className={s.sorry}>Sorry, nothing found</div>
  }

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.grid}>
          {
            houses.map((item, index) => <Link to={`/property/${item.id}`} key={index} className={s.link}><House {...item} /></Link>)
          }
        </div>
      </div>
    </section>
  )
}
