import React, { useState, useEffect } from "react";
import "../../Styles/Authentication.css";
import logo from "../../Images/logo.png";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { server } from "../../Server";

function SignupMentor(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.history.push("/main-dashboard");
    }
  }, []);

  function handleSignup() {
    if (email.length <= 0 || password.length <= 0) {
      alert("Email or Password Missing");
      return;
    }
    setLoading(true);
    axios
      .post(`${server}/auth/signup`, { username: email, password })
      .then(res => {
        props.history.push("/");
        setLoading(false);
      })
      .catch(err => {
        err.response && alert(err.response.data.message);
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <div className="auth-background">
      <div className="auth-head">
        <div className="auth-head-logo">
          <img height="55px" src={logo} alt="logo" />
        </div>
        <div className="auth-head-heading">SWave Academy</div>
        <div className="auth-head-subheading">SWave Learning Platform</div>
      </div>

      <div className="center-card">
        <div className="auth-card">
          <div style={{ paddingBottom: "10px" }}>
            <div className="auth-card-head">Welcome</div>
            <div className="auth-card-subheading">Signup As A Mentor</div>
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
              <input
                className="input"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
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
              <input
                className="input"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button
              className="signup-button"
              onClick={handleSignup}
              disabled={loading ? true : false}
              style={{
                backgroundColor: loading
                  ? "rgba(25,90,139, 0.6)"
                  : "rgb(25,90,139)"
              }}
            >
              Signup for your account
            </button>
            {/* <div className="forgot-password-text">Forgot your password?</div> */}
          </div>
        </div>
        <div className="card-footer">
          <div className="auth-head-subheading" style={{ paddingTop: "10px" }}>
            Already have an account?
          </div>
          <Link
            to="/"
            className="auth-head-subheading"
            style={{ marginTop: "10px", fontSize: "20px", fontWeight: "600" }}
          >
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SignupMentor);
