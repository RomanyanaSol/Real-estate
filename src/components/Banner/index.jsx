import React from 'react';
import s from './style.module.css';
import Image from '../../assets/house-banner.png';
import Search from '../Search';

export default function Banner() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.text}>
          <h1 className={s.h1}>
            <span className={s.span}>Rent</span> Your Dream House With Us.
          </h1>
          <p className={s.p}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nam mollitia tenetur quibusdam obcaecati exercitationem repudiandae distinctio repellendus amet aspernatur!
          </p>
        </div>
        <div className={s.imgDiv}>
          <img src={Image} alt="House" className={s.img}/>
        </div>
      </div>
      <Search />
    </section>
  )
}
