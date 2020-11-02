import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

export default function Signup() {
  return (
    <div className="auth-background">
      <div className="auth-head">
        <div className="auth-head-logo">
          <img height="55px" src={logo} alt="logo" />
        </div>
        <div className="auth-head-heading">SWave Academy</div>
        <div className="auth-head-subheading">SWave Learning Platform</div>
      </div>

      <div
        style={{
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          height: "90%",
          left: "50%",
          position: "absolute"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            justifyItems: "center",
            height: "100%",
            alignItems: "center"
          }}
        >
          <Link to="/signup-mentor" className="signup-select-button">
            Signup as a Mentor
          </Link>
          <Link to="/signup-student" className="signup-select-button">
            Signup as a Student
          </Link>
        </div>
      </div>
    </div>
  );
}
