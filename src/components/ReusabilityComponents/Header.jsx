import React from 'react';
import logo1 from '../../assets/Group 46.png';
import i from '../styles/Home.module.css';



function Header() {
  return (
    <div>
        <img src={logo1} alt="" className={i.logo1} />
    </div>
  )
}

export default Header