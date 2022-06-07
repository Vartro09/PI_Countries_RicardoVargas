import React from 'react';
import './country.css'

const Country = ( { name, img, continent } ) => {
  return (
    <div className='countryCard'>

        <img className='country_Img' src={img} alt={name}/>
        <div className='container_text_card'>
          <h2 className='country_title' >  {name.toUpperCase()} </h2>
          <h3 className='country_tag_country'>Continent:</h3>
          <h3 className='country_continent_title'> {continent} </h3>
        </div>
        <button className='btn_country' >DESCRIPTION</button>

    </div>
  )
}

export default Country;
