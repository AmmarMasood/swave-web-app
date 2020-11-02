import { React, useContext } from "react";
import { componentContext } from "../../State/Store";
import "../../Styles/MainDashboard.css";
import {
  SettingOutlined,
  BellOutlined,
  AppstoreOutlined,
  ReadOutlined,
  CalendarOutlined,
  TeamOutlined
} from "@ant-design/icons";
import logo from "../../Images/logo.png";
import ModuleBuilder from "../ModuleBuilder/ModuleBuilder";
import ModuleBuilderAdmin from "../ModuleBuilder/ModuleBuilderAdmin";
import ClassBuilder from "../ClassBuilder/ClassBuilder";
import ClassBuilderAdmin from "../ClassBuilder/ClassBuilderAdmin";
import SessionBuilder from "../SessionBuilder/SessionBuilder";
import SessionBuilderAdmin from "../SessionBuilder/SessionBuilderAdmin";
import SesssionBuilderSecond from "../SessionBuilder/SessionBuilderSecond";
import SesssionBuilderSecondAdmin from "../SessionBuilder/SessionBuilderSecondAdmin";

function MainDashboard() {
  const [displayComponent, setDisplayComponent] = useContext(componentContext);

  return (
    <div className="dashboard-container">
      {/* side navbar  starts*/}
      <div style={{ position: "relative", backgroundColor: "#195a8b" }}>
        <div className="sidenav">
          {/* ---- */}
          <div className="sidenav-topheading">
            <div className="auth-head-logo">
              <img height="46px" src={logo} alt="logo" />
            </div>
            <div className="sidenav-topheading-toppart">SWave Academy</div>
            <div className="sidenav-topheading-bottompart">
              SWave Learning Platform
            </div>
          </div>
          {/* ----- */}
          <div className="sidebar-buttons">
            <button
              className="navbar-button"
              style={{
                color: displayComponent === 1 && "#195a8b",
                backgroundColor: displayComponent === 1 && "#fff"
              }}
              onClick={() => setDisplayComponent(1)}
            >
              <AppstoreOutlined
                style={{ paddingRight: "6px", fontSize: "18px" }}
              />
              Module
            </button>
            <button
              className="navbar-button"
              style={{
                color: displayComponent === 2 && "#195a8b",
                backgroundColor: displayComponent === 2 && "#fff"
              }}
              onClick={() => setDisplayComponent(2)}
            >
              <ReadOutlined style={{ paddingRight: "6px", fontSize: "18px" }} />
              Classes
            </button>
            <button
              className="navbar-button"
              style={{
                color:
                  (displayComponent === 3 || displayComponent === 3.1) &&
                  "#195a8b",
                backgroundColor:
                  (displayComponent === 3 || displayComponent === 3.1) && "#fff"
              }}
              onClick={() => setDisplayComponent(3)}
            >
              <CalendarOutlined
                style={{ paddingRight: "6px", fontSize: "18px" }}
              />
              Minute Man
            </button>
            <button className="navbar-button">
              <TeamOutlined style={{ paddingRight: "6px", fontSize: "18px" }} />
              Students
            </button>
          </div>
          {/* ----- */}
          {/* ----- */}
          <div className="sidebar-bottom-container">
            <div className="sidebar-bottom-select">
              <div>
                <BellOutlined style={{ color: "#fff", fontSize: "25px" }} />
              </div>
              <div>
                <SettingOutlined style={{ color: "#fff", fontSize: "25px" }} />
              </div>
            </div>
            <div className="sidebar-name-image">
              <img
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                height="45px"
                alt="user"
                style={{ borderRadius: "50%" }}
              />
              <div style={{ color: "#fff", paddingLeft: "10px" }}>Arik T</div>
            </div>
            <div style={{ color: "#fff", padding: "5px", fontSize: "10px" }}>
              <div>TM. Patent Pending. All Right Reversed To</div>
              <div>SerrenissimalLtd. Confidential.</div>
            </div>
          </div>
          {/* ----- */}
        </div>
      </div>
      {/* side navbar ends */}
      <div>
        {displayComponent === 1 && <ModuleBuilder />}
        {displayComponent === 2 && <ClassBuilder />}
        {displayComponent === 3 && <SessionBuilder />}
        {displayComponent === 3.1 && <SesssionBuilderSecond />}
      </div>
      {/* middle part starts */}
      {/* middle part ends */}
      <div style={{ backgroundColor: "#195a8b" }}>
        {displayComponent === 1 && <ModuleBuilderAdmin />}
        {displayComponent === 2 && <ClassBuilderAdmin />}
        {displayComponent === 3 && <SessionBuilderAdmin />}
        {displayComponent === 3.1 && <SesssionBuilderSecondAdmin />}
      </div>
      {/* last part starts */}
      {/* last part ends */}
    </div>
  );
}

export default MainDashboard;
