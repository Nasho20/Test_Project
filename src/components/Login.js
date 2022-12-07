import React, { useState } from 'react'
import '../styles/Login.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    {/* merr data nga forma nqs plotesohet kushti i validimit

    // const navigateToProfile = () => {
    //   // navigate('/UserProfile');
    // }

    // const navigateLogin = () => {
    //   // navigate('/');
    // }
  */}
  }

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
          <button className='signup'>SIGN UP</button><button type='submit'>LOGIN</button>
          {/*levizja e userit ne momentin e logimit nga credentials n profil */}
          {/* onClick={navigateToProfile} */}
          {/* <Routes>
            <Route path="/UserProfile" element={<UserProfile />} />
            <Route path="/" element={<Login />} />
          </Routes>  */}
        </form>
      </div>
    </div>
  )
}
