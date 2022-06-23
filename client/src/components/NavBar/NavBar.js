import React from 'react';
import './navbar.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
    <div className='navBar_container'>
        <NavLink className='nav_logo_container' to={ `/home`}>
          <div className='logo_Container'>
            <h1 className='Logo'>Countries App</h1>
            <div className='Img_Logo'></div>
          </div>
        </NavLink>
        <div className='nav_container'>
          <NavLink className='txtAddActivity' to={ `/`}>
            <span>Landing Page</span>
          </NavLink>
          <NavLink className='txtAddActivity' to={ `/home`}>
            <span>Home</span>
          </NavLink>
          <NavLink className='txtAddActivity' to={ `/create`}>
            <span>Add Activity</span>
          </NavLink>
        </div>
        <SearchBar />
    </div>
  )
}
