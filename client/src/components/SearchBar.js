import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../store/actions';
import './searchBar.css';



export const SearchBar = () => {
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();

    function onClick() {
        dispatch(searchCountries(search));
    }

    function onInputChange(e){
        setSearch(e.target.value);
    }

  return (
    <div className='search_container'>
        <input className='inputSearch' type="text" onChange={onInputChange} value={search} placeholder="Search Country" />
        <button className='buttonSearch' type='button' onClick={onClick}></button>
    </div>
  )
}
