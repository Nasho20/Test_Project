import React from 'react'
import '../styles/Login.css'

export default function Login() {
  return (
    <div className='bg-image'>
      <div className='login-box'>
        <h1>Login</h1>
        <h3>Enter your credentials:</h3>
        <form className='login-form'>
          <input type="text" placeholder="Username" id="username" /><br />
          <input type="password" placeholder="Password" id="password" /> <br />
          <input type="checkbox" id="remember-me" name="remember-button" value="Remember" />
          <label for="remember-button">Remember me</label><br />
          <a href="/">Forgot your password?</a> <br />
          <button className='signup'>SIGN UP</button><button>LOGIN</button>
        </form>
      </div>
    </div>
  )
}
