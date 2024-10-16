import React from 'react';
import './LoginSignup.css'

import email_icon from '../../Components/Assets/email.png';
import password_icon from '../../Components/Assets/password.png';


const LoginSignup = () => {

  return (
    <div>
      <div className="container">
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="user"/>
            <input type="email" placeholder='Email'/>
          </div>
          <div className="input">
            <img src={password_icon} alt="user"/>
            <input type="password" placeholder='Password'/>
          </div>
          <div className="forgot-password">
            <a href="#" onClick={(e) => e.preventDefault()}>Forgot Password?</a>
          </div>
        </div>
        <div className="submit-container">
          <div className="submit">Log In</div>
        </div>
      </div>
      <h1 className="title">
        University of Batangas<br/>
        Photo Album
      </h1>
    </div>
  );
}

export default LoginSignup;
