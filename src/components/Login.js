import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import '../styles/Login.css'
import UserProfile from './UserProfile';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);

    const navigate = useNavigate();

    const navigateTo = () => {
      navigate('');
    }
    const navigateLogin = () => {
      navigate('/');
    }

  }

  // https://bobbyhadz.com/blog/react-onclick-redirect#:~:text=To%20redirect%20to%20another%20page,function%20lets%20us%20navigate%20programmatically. 
  // https://react-hook-form.com/api/useform/handlesubmit/
  // UserProfile to be added as a tag and working on the redirect button of log in 
  return (
    <div className='bg-image'>
      <div className='login-box'>
        <h1>Login</h1>
        <h3>Enter your credentials:</h3>
        <form onSubmit={handleSubmit} className='login-form'>
          <div className='email'>
            <label htmlFor='username'>Email: </label>
            <input value={username} type="email" placeholder="Username" id="username" onChange={(e) => setUsername(e.target.value)} /><br />
          </div>
          <label htmlFor='password'>Password: </label>
          <input value={password} type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} /> <br />
          <input type="checkbox" id="remember-me" name="remember-button" value="Remember" />
          <label for="remember-button">Remember me</label><br />
          <a href="/">Forgot your password?</a> <br />
          <button className='signup'>SIGN UP</button><button type='submit' onClick={navigateToProfile}>LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
