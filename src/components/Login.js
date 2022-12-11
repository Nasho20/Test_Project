import React, { useState } from 'react'
import '../styles/Login.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <div className='password'>
          <label htmlFor='password'>Password: </label>
          <input value={password} type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} /> <br />
          </div>
          <input type="checkbox" id="remember-me" name="remember-button" value="Remember" />
          <label for="remember-button">Remember me</label><br />
          <button type='submit'>LOGIN</button> 
          
        </form>
      </div>
    </div>
  )
}
