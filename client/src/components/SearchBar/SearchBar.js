import React, { useState } from 'react';
import './searchBar.css';
import { Link } from 'react-router-dom';


export const SearchBar = () => {
    const [name, setName] = useState('');

    function onClick() {
        setName('');
    }

    function onInputChange(e){
      setName(e.target.value);
    }

  return (
    <div className='search_container'>
        <input 
            className='inputSearch' 
            type="text" onChange={onInputChange} 
            value={name} 
            placeholder="Search Country" 
        />
        <Link to={ `/search/${name}` }>
          <button 
            className='buttonSearch' 
            type='button' 
            onClick={onClick}
          >
          </button>  
        </Link>
    </div>
  )
}
