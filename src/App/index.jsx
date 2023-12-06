import React from 'react';
import s from './style.module.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';

export default function App() {
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}
