import axios from "axios";
import React, { useState } from "react";

function Profile({ userData }) {
  const [updateData, setUpdateData] = useState({
    ...userData,
    newPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      updateData.newPassword &&
      updateData.newPassword !== userData.password
    ) {
      userData.password = updateData.newPassword;
    }
    if (updateData.fullName) {
      userData.fullName = updateData.fullName;
    }
    if (updateData.username) {
      userData.username = updateData.username;
    }
    if (updateData.email) {
      userData.email = updateData.email;
    }

    console.log(userData);

    axios({
      method: "put",
      url: "https://nbyula-serverr.herokuapp.com/api/updateUserData",
      data: {
        _id: userData._id,
        username: userData.username,
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password,
      },
    })
      .then((data) => {
        console.log(data.data.acknowledged);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="left-container">
        <h1 className="right-h1">Profile</h1>
        <div className="right-card">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={updateData.username}
                name="username"
                onChange={(e) =>
                  setUpdateData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div className="row">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter Full name"
                value={updateData.fullName}
                name="fullName"
                onChange={(e) =>
                  setUpdateData((prev) => ({
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
                placeholder="Enter Email"
                value={updateData.email}
                name="email"
                onChange={(e) =>
                  setUpdateData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div className="row">
              <label>Change Password</label>
              <input
                type="password"
                placeholder="Enter a new password"
                value={updateData.newPassword}
                name="newPassword"
                onChange={(e) =>
                  setUpdateData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div id="button" className="row">
              <button type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
      <div className="right-container">
        <h1 className="right-h1">Mark Off-Hours</h1>
      </div>
    </div>
  );
}

export default Profile;
