import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login.js'
import UserProfile from './components/UserProfile';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <Login>
        <Routes>
          <Route path='/login' element={Login} />
          <Route path='/userprofile' element={UserProfile} />
        </Routes>
      </Login>
    </Router>
  );
}

export default App;
