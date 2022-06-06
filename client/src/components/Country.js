import React from 'react';

const Country = ( { name, img } ) => {
  return (
    <div>

        <img src={img} alt={name}/>
        <h1>{name}</h1>

    </div>
  )
}

export default Country;
