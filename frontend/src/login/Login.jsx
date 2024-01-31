import React from 'react';
import './Login.css';
import email from '../assets/email.png';
import password from '../assets/password.png';
import loginImg from '../assets/loginImg.jpeg';
import {Link,useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const[name,setName]=useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if(name.includes("@admin")){
      navigate("/dashboard")
    }else{
      navigate("/")
    }
  };
  return (
    <div className='whole-container'>
      <div className='img-container'>
      <div className='opacity-overlay'></div>
      <div className='welcome-text'>
          <h2>Welcome Back!</h2>
          <p>Sign in to continue your learning journey.</p>
        </div>
        <img src={loginImg} alt="" width="100%" height="100%" />
      </div>
    <div className='login-container'>
      <div className='login-header'>
        <div className='login-text'>Sign In</div>
        <div className='login-underline'></div>
      </div>
      <form onSubmit={handleLogin}>
      <div className='login-input'>
        {/* <div className='login-inputs'>
          <img src={userIcon} alt='' />
          <input type='text' placeholder='Name' />
        </div> */}
        <div className='login-inputs'>
          <img src={email} alt='' />
          <input type='email' placeholder='Email id' onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className='login-inputs'>
          <img src={password} alt='' />
          <input type='password' placeholder='Password' />
        </div>
      </div>
      <div className='login-forgot-password'>
        Forgot password? <span>Click Here!!!</span>
      </div>
      <div className='login-submit-container'>
      <input type='submit' value='Login' className='login-submit'/>
        {/* <div className='login-submit'>Login</div> */}
      </div>
      <p>New User/Admin <Link to='/signup'>Sign up</Link></p>
        
      </form>
    </div>
        </div>
  );
}

export default Login;