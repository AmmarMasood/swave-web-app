import React, { useState, useContext, useEffect } from "react";
import "../../Styles/Authentication.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../State/Store";
import { server } from "../../Server";
import setAuthToken from "../../setAuthToken";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useContext(userContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.history.push("/main-dashboard");
    }
  }, []);
  function handleLogin() {
    if (email.length <= 0 || password.length <= 0) {
      alert("Email or Password Missing");
      return;
    }
    setLoading(true);
    axios
      .post(`${server}/auth/login`, { username: email, password })
      .then(res => {
        console.log(res);
        // const user = {id:res.data.id, name: res.data.username, role: res.data.roles[0].name}
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("role", res.data.roles[0].name)
        setAuthToken(res.data.accessToken);
        const m ={role: res.data.roles[0].name, username: res.data.username};
        setUser(m);
        props.history.push("/main-dashboard");
      })
      .catch(err => {
        // err.response && alert(err.response.data.message);
        alert("Please enter correct email or password")
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
              disabled={loading ? true : false}
              onClick={handleLogin}
              style={{
                backgroundColor: loading
                  ? "rgba(25,90,139, 0.6)"
                  : "rgb(25,90,139)"
              }}
            >
              Login for your account
            </button>
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
