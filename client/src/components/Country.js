import React from 'react';

const Country = ( { name, img, continent } ) => {
  return (
    <div>

        <img src={img} alt={name}/>
        <h1>{name}</h1>
        <h3> {continent} </h3>

    </div>
  )
}

export default Country;
