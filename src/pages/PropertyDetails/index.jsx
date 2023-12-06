import React from 'react';
import { housesData } from '../../data';
import { BiBed, BiArea, BiBath } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import s from './style.module.css';


export default function PropertyDetails() {

  const { id } = useParams();

  const house = housesData.find(item => item.id === +id)

  return (
    <section>
      <div className={s.section}>
        <div className={s.container}>
          <div>
            <h2 className={s.h2}>{house.name}</h2>
            <h3 className={s.h3}>{house.address}</h3>
          </div>
          <div className={s.typeCountry}>
            <div className={s.type}>{house.type}</div>
            <div className={s.country}>{house.country}</div>
          </div>
          <div className={s.price}>$ {house.price}</div>
        </div>
        <div className={s.imgFlex}>
          <div className={s.imgContainer}>
            <div className={s.imgBottom}>
              <img src={house.imageLg} alt="House" className={s.img} />
            </div>
            <div className={s.iconContainer}>
              <div className={s.iconFlex}>
                <BiBed className={s.icon} />
                <div>{house.bedrooms}</div>
              </div>
              <div className={s.iconFlex}>
                <BiBath className={s.icon} />
                <div>{house.bathrooms}</div>
              </div>
              <div className={s.iconFlex}>
                <BiArea className={s.icon} />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className={s.agentFlex}>
            <div className={s.agent}>
              <div>
                <img src={house.agent.image} alt="Agent" className={s.agentImg} />
              </div>
              <div>
                <div className={s.agentName}>{house.agent.name}</div>
                <Link to={''} className={s.agentLink}>View Listings</Link>
              </div>
            </div>
            <form className={s.form}>
              <input type="text" placeholder='Name*' className={s.input} />
              <input type="text" placeholder='Email*' className={s.input} />
              <input type="text" placeholder='Phone*' className={s.input} />
              <textarea
                placeholder='Message*'
                defaultValue='Hello, I am interested in [Modern apartment]'
                className={s.textArea}>
              </textarea>
              <div className={s.buttons}>
                <button className={s.btn}>Send message</button>
                <button className={s.btnCall}>Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
