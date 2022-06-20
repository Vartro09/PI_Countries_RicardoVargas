import React from 'react';
import { NavLink } from 'react-router-dom';
import './country.css'

const Country = ( { name, img, continent, id, population } ) => {
  return (
    <div className='countryCard'>

        <img className='country_Img' src={img} alt={name}/>
        <div className='container_text_card'>
          <h2 className='country_title' >  {name.toUpperCase()} </h2>
          <h3 className='country_tag_country'>Continent:</h3>
          <h3 className='country_continent_title'> {continent} </h3>
          <p> {population} </p>
        </div>
        <NavLink to={`/country/${id}`}>
          <button className='btn_country' >DESCRIPTION</button>
        </NavLink>

    </div>
  )
}

export default Country;
