import React, { createContext, useEffect, useState } from 'react';
import { housesData } from '../../data';

export const HouseContext = createContext();

export default function HouseContextProvider({ children }) {

  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map(house => house.country);
    const uniqueСountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueСountries);
  }, [houses]);

  useEffect(() => {
    const allProperties = houses.map(house => house.type);
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {

    setLoading(true);

    const isDefault = (str) => {
      return str.includes('(any)')
    };

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((item) => {
      const housePrice = parseInt(item.price);

      const isCountryMatch = isDefault(country) || item.country === country;
      const isPropertyMatch = isDefault(property) || item.type === property;
      const isPriceMatch = isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

      return isCountryMatch && isPropertyMatch && isPriceMatch;
    });

    setTimeout(() => {
      newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
      setLoading(false);
    }, 1000);
  }


  return (
    <HouseContext.Provider value={{
      houses,
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      loading,
      handleClick
    }}>
      {children}
    </HouseContext.Provider>
  )
}
