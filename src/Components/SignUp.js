import axios from "axios";
import React, { useState } from "react";
import "./LogIn.css";

function SignUp({ setLoggedIn, setUserData }) {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !signUpData.username ||
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.confirmPass
    ) {
      console.log("There are empty fields.");
      return;
    }
    if (signUpData.password !== signUpData.confirmPass) {
      console.log("Passwords didn't match");
      return;
    }

    axios({
      method: "post",
      url: "https://nbyula-serverr.herokuapp.com/api/signUp",
      data: {
        username: signUpData.username,
        email: signUpData.email,
        password: signUpData.password,
      },
    })
      .then((data) => {
        setLoggedIn(data.data);
        setUserData(signUpData.email);
      })
      .catch((err) => console.log(err));

    setSignUpData({
      username: "",
      email: "",
      password: "",
      confirmPass: "",
    });
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your Username"
            value={signUpData.username}
            name="username"
            onChange={(e) =>
              setSignUpData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="row">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={signUpData.email}
            name="email"
            onChange={(e) =>
              setSignUpData((prev) => ({
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
            placeholder="Enter your Password"
            value={signUpData.password}
            name="password"
            onChange={(e) =>
              setSignUpData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div className="row">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={signUpData.confirmPass}
            name="confirmPass"
            onChange={(e) =>
              setSignUpData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
        <div id="button" className="row">
          <button type="submit">Create Account</button>
        </div>
      </form>
      {/* <OtherMethods /> */}
    </div>
  );
}

export default SignUp;
