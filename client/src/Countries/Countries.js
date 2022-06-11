import React from 'react'
import Country from '../components/Country/Country';
import './countries.css';

export const Countries = ( { countries } ) => {
  return (
    <div>
      <div className='countries_container'>
          {
              countries && countries.map( c =>  {
                return  <Country key={c.id} name={c.name} img={c.img}  continent={c.continent} />
              })
          }
      </div>
    </div>
  )
}

