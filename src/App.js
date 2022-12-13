import React, { useState, useEffect } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login.js'
import UserProfile from './components/UserProfile';

function App() {
  const [token, setToken] = useState();
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users") //UserData
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }


  useEffect(() => {
    fetchUserData()
  }, [])


  // if(!token) { //kusht per t shfaqur login nqs token esht falsy
  //   return <Login setToken={setToken} /> //mund te vendosim dhe UserProfile
  // }


return (
  <div>
    <Login />
    <UserProfile />
    {users.length > 0 && (
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    )}
  </div>
  // <Router>
  //   <Login>
  //     <Routes>
  //       <Route path='/login' element={Login} /> 
  //       <Route path='/userprofile' element={UserProfile} />
  //     </Routes>
  //   </Login>
  // </Router>
);
        }
export default App;
