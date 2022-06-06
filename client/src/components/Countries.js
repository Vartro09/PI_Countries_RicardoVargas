import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Country from './Country';
import { fetchCountries } from '../store/actions';
import countries from './countries.css';

export const Countries = () => {
   let countries = useSelector( (state) => state.countries );
   let dispatch = useDispatch();

   useEffect( () => {
    dispatch(fetchCountries());
   }, []);

   console.log(countries);
  return (
    <div className='countries_container'>
        {
            countries.map( c =>  {
              return  <Country name={c.name} img={c.img} />
            })
        }
    </div>
  )
}