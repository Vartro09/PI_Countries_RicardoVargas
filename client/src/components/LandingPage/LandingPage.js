import React from 'react';
import { NavLink } from 'react-router-dom';

import './LandingPage.css';



export const LandingPage = () => {

 
  return (
    <div className='landing_page_container'>
        <div>
            <h1 className='landing_title'>WOULD YOU LIKE <br /> KNOW MORE <br /> ABOUT <span className='landing_title_sub' >COUNTRIES</span> ?</h1>
            <div className="box-2">
                <div className="btn btn-two">
                    <NavLink className='btn_landing' to='/home' >
                            <span>LET'S GO!</span>
                    </NavLink>    
                </div>
            </div>
        </div>
    </div>
  )
}
