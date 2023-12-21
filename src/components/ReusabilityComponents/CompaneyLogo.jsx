import React from 'react';
import logo from '../../assets/moptro logo.png';
import i from '../styles/Home.module.css';


function CompaneyLogo() {
  return (
<div className={i.logoHeader}>
           <div>
           <p>4</p>
           </div>
          <img src={logo} alt="Path is not matchoing" />
       </div>  )
}

export default CompaneyLogo