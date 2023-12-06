import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import s from './style.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to={'/'}>
          <img src={Logo} alt="logo" />
        </Link>
        <div className={s.linksContainer}>
          <Link className={s.linkLog} to=''>Log in</Link>
          <Link className={s.linkSign} to=''>Sign up</Link>
        </div>
      </div>
    </header>
  )
}
