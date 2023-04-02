import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import UserProfile from "./UserProfile";
import { getItemFromStorage, setItemOnStorage } from "../utils/storage";
import constants from "../utils/constants";
import AdminPage from "./AdminPage";
import checkIsAdmin from "../utils/checkIsAdmin";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action-creators/auth-actions";
import { useNavigate } from "react-router-dom";
import user from "../redux/reducers/user";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.auth.user;
  });
  const { loading, error } = useSelector((state) => {
    return state.ui;
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    if (user) {
      navigate(constants.routes.HOME);
    }
  }, [user]);

  const userLogin = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
    setEmail("");
    setPassword("");
    setLoggedIn(constants.login_user_state.USER);
  };

  const adminLogin = () => {
    const isAdmin = checkIsAdmin({ email });
    fetch("https://apingweb.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (isAdmin) {
          setItemOnStorage({ key: constants.TOKEN, value: data.token });
          setItemOnStorage({ key: constants.USER_ID, value: data.result.id });
          setItemOnStorage({ key: constants.EMAIL, value: data.result.email });
          setEmail("");
          setPassword("");
          setLoggedIn(constants.login_user_state.ADMIN);
        }
      });
  };

  if (loading)
    return (
      <div>
        <p>loading..</p>
      </div>
    );

  return (
    <div className="bg-image">
      <div className="login-box">
        <h1>Login</h1>
        <h3>Enter your credentials:</h3>
        <form className="login-form">
          <div className="email">
            <label htmlFor="username">Email: </label>
            <input
              value={email}
              type="email"
              placeholder="Username"
              id="username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </div>
          <div className="password">
            <label htmlFor="password">Password: </label>
            <input
              value={password}
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
          </div>
          {error && <h3>username not found</h3>}
          <input
            type="checkbox"
            id="remember-me"
            name="remember-button"
            value="Remember"
          />
          <label htmlFor="remember-button">Remember me</label>
          <br />
          <button type="button" onClick={userLogin}>
            LOGIN
          </button>
          <button type="button" onClick={adminLogin}>
            LOGIN AS ADMIN
          </button>
        </form>
      </div>
    </div>
  );
}
