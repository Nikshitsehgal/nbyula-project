import React from "react";
import Profile from "./Profile";
import "./dashboard.css";

//  take profile section from app.js and put that state here and toggle here dash n profile

function Dashboard({ profileState, userData }) {
  return (
    <div>
      <div className="dashboard">
        <p>
          Dashboard {">"} {profileState ? "Profile" : "Appointments"}
        </p>
        <p></p>
      </div>
      {profileState ? (
        <Profile userData={userData} />
      ) : (
        <div className="container">
          <div className="left-container">
            <h1>Upcoming Appointments</h1>
            {/* Card */}
            <div className="card">
              <div className="card-sub">
                <div>
                  <h2 className="card-title">IELTS Masterclass</h2>
                  <p className="card-agenda">
                    Discussion on Importance of IELTS
                  </p>
                </div>
                <button className="card-btn">Join</button>
              </div>
              <div className="card-sub">
                <p>Dr. Pranav Dubey</p>
                <p>24th Oct 2022</p>
                <p>5:30 PM - 6:30 PM</p>
              </div>
            </div>
            {/* Card */}
            <div className="card">
              <div className="card-sub">
                <div>
                  <h2 className="card-title">IELTS Masterclass</h2>
                  <p className="card-agenda">
                    Discussion on Importance of IELTS
                  </p>
                </div>
                <button className="card-btn">Join</button>
              </div>
              <div className="card-sub">
                <p>Dr. Pranav Dubey</p>
                <p>24th Oct 2022</p>
                <p>5:30 PM - 6:30 PM</p>
              </div>
            </div>
            {/* Card */}
            <div className="card">
              <div className="card-sub">
                <div>
                  <h2 className="card-title">IELTS Masterclass</h2>
                  <p className="card-agenda">
                    Discussion on Importance of IELTS
                  </p>
                </div>
                <button className="card-btn">Join</button>
              </div>
              <div className="card-sub">
                <p>Dr. Pranav Dubey</p>
                <p>24th Oct 2022</p>
                <p>5:30 PM - 6:30 PM</p>
              </div>
            </div>
          </div>
          <div className="right-container">
            <h1 className="right-h1">Schedule an Appointment</h1>
            <div className="right-card">
              <form>
                <div className="row">
                  <label>Title</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    // value={loginData.username}
                    // name="username"
                    // onChange={(e) =>
                    //   setLoginData((prev) => ({
                    //     ...prev,
                    //     [e.target.name]: e.target.value,
                    //   }))
                    // }
                  />
                </div>
                <div className="row">
                  <label>Agenda</label>
                  <input
                    type="text"
                    placeholder="Enter Agenda"
                    // value={loginData.password}
                    // name="password"
                    // onChange={(e) =>
                    //   setLoginData((prev) => ({
                    //     ...prev,
                    //     [e.target.name]: e.target.value,
                    //   }))
                    // }
                  />
                </div>
                <div className="row">
                  <label>Date and Time</label>
                  <input
                    type="date"
                    placeholder="Enter date"
                    // value={loginData.password}
                    // name="password"
                    // onChange={(e) =>
                    //   setLoginData((prev) => ({
                    //     ...prev,
                    //     [e.target.name]: e.target.value,
                    //   }))
                    // }
                  />
                </div>
                <div className="row">
                  <label>Guest</label>
                  <input
                    type="text"
                    placeholder="Enter Guest Name"
                    // value={loginData.password}
                    // name="password"
                    // onChange={(e) =>
                    //   setLoginData((prev) => ({
                    //     ...prev,
                    //     [e.target.name]: e.target.value,
                    //   }))
                    // }
                  />
                </div>
                <div id="button" className="row">
                  <button type="submit">Schedule</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
