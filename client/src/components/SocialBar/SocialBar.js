import React from 'react';
import { NavLink } from 'react-router-dom';
import './SocialBar.css';


export const SocialBar = () => {
  const urlLn = 'https://www.linkedin.com/in/ricardo-andr%C3%A9s-vargas-n%C3%A1jar-%F0%9F%87%A8%F0%9F%87%B7-313573194/'
  return (
    <div className='social_container animate__animated animate__fadeInLeft'>

      <a href='https://www.linkedin.com/in/ricardo-andr%C3%A9s-vargas-n%C3%A1jar-%F0%9F%87%A8%F0%9F%87%B7-313573194/' target="_blank">
        <div className='img_ln'></div>
      </a>

      <a href='https://www.behance.net/richvartro' target="_blank">
        <div className='img_bh'></div>
      </a>

      <a href='https://github.com/Vartro09' target="_blank">
        <div className='img_git'></div>
      </a>

    </div>
  )
}
