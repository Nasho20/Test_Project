import React, { useState } from 'react'
import '../styles/Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

  }

  return (
    <div className='bg-image'>
      <div className='login-box'>
        <h1>Login</h1>
        <h3>Enter your credentials:</h3>
        <form onSubmit={handleSubmit} className='login-form'>
          <label htmlFor='email'></label>
          <input value={email} type="email" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} /><br />
          <label htmlFor='password'></label>
          <input value={password} type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} /> <br />
          <input type="checkbox" id="remember-me" name="remember-button" value="Remember" />
          <label for="remember-button">Remember me</label><br />
          <a href="/">Forgot your password?</a> <br />
          <button className='signup'>SIGN UP</button><button type='submit'>LOGIN</button>
        </form>
      </div>
    </div>
  )
}
