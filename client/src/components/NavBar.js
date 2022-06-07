import React from 'react';
import './navbar.css';
import { SearchBar } from './SearchBar';


export const NavBar = () => {
  return (
    <div className='navBar_container'>
        <SearchBar />
    </div>
  )
}
