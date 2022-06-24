import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchCountries } from '../../store/actions';
import { Countries } from '../Countries/Countries';
import './SearchName.css';



export const SearchName = () => {
    const dispatch = useDispatch();
    const filteredCountries = useSelector( state => state.searchCountriesByName );
    const { name } = useParams(); 
    const txt = '<< return';
    
    useEffect( () => {
        dispatch( searchCountries(name) );
    },[ dispatch, name]);

    return (
    <div  className='searchName_page' >
        <div className='info_container'>
            <NavLink className='navLink_container' to={'/home'}>
                <p> { txt } </p>
            </NavLink>
            {
                <h1 className='text_results'>  <span className='num_results'>{ filteredCountries.length }</span>  RESULTS FOR: '{ name }' </h1>
            }
        </div>
        <div className='countries_container'>
            <Countries countries={filteredCountries} />
        </div>
    </div>
  )
}
