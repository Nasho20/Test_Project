import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/Login.js";
import LoginExample from "./components/LoginExample";
// import UserProfile from './components/UserProfile';

function App() {
  // const [token, setToken] = useState();
  // const [users, setUsers] = useState([]);

  return (
    // </div>
    <div>
      <Login />
      {/* <LoginExample /> */}
      {/* <UserProfile /> */}
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
