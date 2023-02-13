import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import UserProfile from "./UserProfile";
import { getItemFromStorage, setItemOnStorage } from "../utils/storage";
import constants from "../utils/constants";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const token = getItemFromStorage({
      key: constants.TOKEN,
    });
    if (token && !user) {
      const id = getItemFromStorage({
        key: constants.USER_ID,
      });
      fetch(`https://apingweb.com/api/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            setUser(data.data[0]);
            setLoading(false);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fetchUserData = () => {
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
        console.log("Hoorayyyyy", data);
        if (data.success === true) {
          setItemOnStorage({ key: constants.TOKEN, value: data.token });
          setItemOnStorage({ key: constants.USER_ID, value: data.result.id });
          setEmail("");
          setPassword("");
          setUser(data.result);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (loading && !user)
    return (
      <div>
        <p>loading..</p>
        {/* spinner to be added */}
      </div>
    );
  if (!loading && user) return <UserProfile user={user} />;
  else
    return (
      <div className="bg-image">
        <div className="login-box">
          <h1>Login</h1>
          <h3>Enter your credentials:</h3>
          <form onSubmit={handleSubmit} className="login-form">
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
            {showError && <h3>username not found</h3>}
            <input
              type="checkbox"
              id="remember-me"
              name="remember-button"
              value="Remember"
            />
            <label htmlFor="remember-button">Remember me</label>
            <br />
            <button type="submit" onClick={fetchUserData}>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
}
