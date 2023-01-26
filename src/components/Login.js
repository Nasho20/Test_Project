import React, { useState } from 'react'
import '../styles/Login.css'
import UserProfile from './UserProfile';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const fetchUserData = () => {

    fetch("userdata.JSON") 
      .then(response => response.json())
      .then(result => {

        for (var i = 0; i <= result.length; i++) {
          const checkEmail = result[i].email === username;
          const checkPassword = result[i].password === password;
          if (checkEmail) {
            setLoggedIn(true)
            setShowError(false)
            break;
          } else {
            setLoggedIn(false)
            setShowError(true)
          }
          if (checkPassword) {
            setLoggedIn(true)
            setShowError(false)
            break;
          } else {
            setLoggedIn(false)
            setShowError(true)
          }
        }
      }
    )
  }

  if (loggedIn) return <UserProfile />
  else
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
            {showError && <h3 >username not found</h3>}
            <input type="checkbox" id="remember-me" name="remember-button" value="Remember" />
            <label htmlFor="remember-button">Remember me</label><br />
            <button type='submit' onClick={fetchUserData}>LOGIN</button>
          </form>
        </div>
      </div>
    )
}