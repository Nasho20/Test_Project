import React, { useState } from 'react';
import './App.css';
import Login from './components/Login.js'
import Register from './components/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  return (
    <div className="App">
      {
        currentForm == "login" ? <Login /> : <Register />
      }
    </div>
  );
}

export default App;
