import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

function App() {
  const handleSwitch = (task) => {
    if (task === "logIn") {
      setLoginState(true);
      setSignUpState(false);
    }
    if (task === "signUp") {
      setLoginState(false);
      setSignUpState(true);
    }
  };

  const [loginState, setLoginState] = useState(true);
  const [signUpState, setSignUpState] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [profileState, setProfileState] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("useeff", userData);
    if (!userData.username) {
      axios
        .get("https://nbyula-serverr.herokuapp.com/api/getUserData", {
          params: {
            email: userData.email,
          },
        })
        .then((response) => {
          console.log("res", response);
          setUserData(response);
        });
    }
    console.log("final", userData);
  }, [loggedIn]);

  return (
    <div className="App">
      <nav className="nav">
        <h1 className="nav-brand">Nbyula</h1>
        {!loggedIn ? (
          <div className="right-nav">
            <p
              onClick={() => handleSwitch("logIn")}
              className={loginState ? "logIn logIn-border" : "logIn"}
            >
              Log In
            </p>
            <p
              onClick={() => handleSwitch("signUp")}
              className={signUpState ? "logIn logIn-border" : "logIn"}
            >
              Sign Up
            </p>
          </div>
        ) : (
          <div className="right-nav">
            <p
              onClick={() => {
                setProfileState(false);
              }}
              className={!profileState ? "logIn logIn-border" : "logIn"}
            >
              Appointments
            </p>
            <p
              onClick={() => {
                setProfileState(true);
              }}
              className={profileState ? "logIn logIn-border" : "logIn"}
            >
              Profile
            </p>
            <p onClick={() => setLoggedIn(false)} className="logIn">
              Log Out
            </p>
          </div>
        )}
      </nav>
      {!loggedIn && (
        <div>
          {loginState === true && (
            <LogIn setLoggedIn={setLoggedIn} setUserData={setUserData} />
          )}
          {signUpState === true && (
            <SignUp setLoggedIn={setLoggedIn} setUserData={setUserData} />
          )}
        </div>
      )}
      {loggedIn && (
        <Dashboard profileState={profileState} userData={userData} />
      )}
    </div>
  );
}

export default App;
