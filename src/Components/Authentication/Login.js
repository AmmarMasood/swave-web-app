import React from "react";
import "../../Styles/Authentication.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-background">
      <div className="auth-head">
        <div className="auth-head-logo">
          <img height="55px" src={logo} alt="logo" />
        </div>
        <div className="auth-head-heading">SWave Academy</div>
        <div className="auth-head-subheading">SWave Learning Platform</div>
      </div>

      <div className="login-center-card">
        <div className="auth-card">
          <div style={{ paddingBottom: "10px" }}>
            <div className="auth-card-head">Welcome</div>
            <div className="auth-card-subheading">Login to your account</div>
          </div>
          <div className="auth-card-body">
            <div>
              <label
                style={{
                  display: "block",
                  paddingBottom: "10px",
                  textAlign: "left",
                  color: "#195a8b"
                }}
              >
                Email
              </label>
              <input className="input" />
            </div>
            <div style={{ marginTop: "20px" }}>
              <label
                style={{
                  display: "block",
                  padddingBottom: "10px",
                  textAlign: "left",
                  color: "#195a8b"
                }}
              >
                Password
              </label>
              <input className="input" />
            </div>
            <button className="signup-button">Login for your account</button>
            <div className="forgot-password-text">Forgot your password?</div>
          </div>
        </div>
        <div className="card-footer">
          <div className="auth-head-subheading" style={{ paddingTop: "10px" }}>
            Don't have an account?
          </div>
          <div>
            <Link
              to="signup"
              className="auth-head-subheading"
              style={{ marginTop: "10px", fontSize: "20px", fontWeight: "600" }}
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
