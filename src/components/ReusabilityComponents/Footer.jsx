import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import i from "../styles/Home.module.css";

function Footer({Fun,active}) {

  let navigate1 = () => {
       Fun('home active')
  };
  let navigate2 = () => {
    Fun('emp active')
  };

  
  return (
    <>
      <div className={i.footer}>
        <div>
          {
          active== 1 ?
          <FaHome onClick={navigate1}  className={i.homeActive}/>  : <FaHome onClick={navigate1}/>
          }
          
        </div>
        <div>
          {
            active== 2 ? <CgProfile onClick={navigate2} className={i.empActive}/> :
             <CgProfile onClick={navigate2}/>
          }
          
        </div>
      </div>
    </>
  );
}

export default Footer;
