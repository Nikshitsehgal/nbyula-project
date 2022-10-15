import axios from "axios";
import React, { useState } from "react";
import "./LogIn.css";

function LogIn({ setLoggedIn, setUserData }) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      console.log("There are empty fields");
      return;
    }
    axios({
      method: "post",
      url: "http://localhost:5000/api/logIn",
      data: {
        username: loginData.username,
        password: loginData.password,
      },
    })
      .then((data) => {
        setLoggedIn(data.data);
        setUserData(data.data);
      })
      .catch((err) => console.log(err));

    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={loginData.username}
            name="username"
            onChange={(e) =>
              setLoginData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="row">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={loginData.password}
            name="password"
            onChange={(e) =>
              setLoginData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div id="button" className="row">
          <button type="submit">Login</button>
        </div>
      </form>
      {/* <OtherMethods /> */}
    </div>
  );
}

export default LogIn;
