import React from 'react';
import Country from '../Country/Country';
import './countries.css';

export const Countries = ( { countries } ) => {
  console.log(countries)
  return (
    <div>
      <div className='countries_container'>
          {
              countries && countries.map( (c) =>  {
                return  (
                          <Country 
                          key={c.id} 
                          id={c.id} 
                          name={c.name} 
                          img={c.img} 
                          continent={c.continent} 
                          population={c.population}
                          borders={c.borders}
                          />
                        )  
              })
          }
      </div>
    </div>
  )
}

