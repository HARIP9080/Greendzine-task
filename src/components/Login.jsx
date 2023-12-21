import React from "react";
import i from "./styles/Login.module.css";
import icon from "../assets/Group3.png";
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  let navigateFunction = (event)=>{
    event.preventDefault();
    navigate('HomePage')
  }
  return (
    <>
      <div className={i.loginFormParent}>
        <div className={i.header}>
          <div>
            <img src={icon} alt="image path not matching" />
            <h3>#We are Hectric</h3>
          </div>
        </div>
        <div>
          <form action="./Home.jsx" onSubmit={navigateFunction} method="post" className={i.formParent}>
            <input type="email" placeholder="E-mail" required/>
            <input type="text" placeholder="Password" required/>
            <button type="submit">Login</button>
            <a href="">Forget Password?</a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
