import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../store/actions';



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
    <div>
        <input type="text" onChange={onInputChange} value={search}/>
        <button type='button' onClick={onClick}>Search</button>
    </div>
  )
}
