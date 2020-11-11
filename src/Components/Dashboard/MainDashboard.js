import { React, useContext, useEffect } from "react";
import { componentContext,dataContext, adminAllModules,selectedClassContext,userContext,selectedSessionContext } from "../../State/Store";
import "../../Styles/MainDashboard.css";
import {
  SettingOutlined,
  BellOutlined,
  AppstoreOutlined,
  ReadOutlined,
  CalendarOutlined,
  TeamOutlined
} from "@ant-design/icons";
import axios from "axios";
import {server} from "../../Server";
import logo from "../../Images/logo.png";
import ModuleBuilder from "../ModuleBuilder/ModuleBuilder";
import ModuleBuilderAdmin from "../ModuleBuilder/ModuleBuilderAdmin";
import ClassBuilder from "../ClassBuilder/ClassBuilder";
import ClassBuilderAdmin from "../ClassBuilder/ClassBuilderAdmin";
import SessionBuilder from "../SessionBuilder/SessionBuilder";
import SessionBuilderAdmin from "../SessionBuilder/SessionBuilderAdmin";
import SesssionBuilderSecond from "../SessionBuilder/SessionBuilderSecond";
import SesssionBuilderSecondAdmin from "../SessionBuilder/SessionBuilderSecondAdmin";
import setAuthToken from "../../setAuthToken";
import {Popover, Button} from 'antd';


function MainDashboard(props) {
  const [displayComponent, setDisplayComponent] = useContext(componentContext);
  const [data, setData] = useContext(dataContext)
  const [user, setUser] = useContext(userContext)
  const [selectedClass, setSelectedClass]= useContext(selectedClassContext)
  const [allModules, setAllModules] = useContext(adminAllModules);
  const [selectedSession, setSelectedSession] = useContext(selectedSessionContext);
  const settingContent = (
    <div>
     <Button type="primary" style={{backgroundColor: "#195a8b", color: "#fff", margin:"10px"}} onClick={() => {
       localStorage.removeItem("token");
       localStorage.removeItem("role");
       props.history.push("/");
       setSelectedClass(-1); 
       setSelectedSession(-1)
       setData({ moduleName: "",
       divisionName: "",
       moduleSummary: "",
       moduleClasses: [],
       adminSuggestionForModule:{
         moduleName: "",
         divisionName: "",
         moduleSummary: ""
       }})
     }}>Logout</Button>
    </div>
  );
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.history.push("/");
    }else{
      setAuthToken(localStorage.getItem("token"));
      if(localStorage.getItem("role") === "ADMIN"){
        axios.get(`${server}/v1/module/admin/all`).then(res => {
          console.log(res.data);
          console.log(res);
          setAllModules(res.data.moduleResponses);
        }).catch(err => {
          console.log(err);
      alert("Unable to get data from backend");
        })
      } else{
      axios.get(`${server}/v1/module`).then(res => {
        console.log(res.data);
        if(Object.keys(res.data).length > 0){
        setData(res.data)
        }
        console.log(res);
        console.log(Object.keys(res.data).length)
      }).catch(err => {
        console.log(err);
        alert("Error while getting data from backend")
      })
    }
  }
  }, []);

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
          {/*  */}
          <div style={{color: "#fff"}}>{selectedClass >= 0 && `Selected Class: ${selectedClass+1}`}</div>
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
              <Popover placement="topLeft" content={settingContent} trigger="click">
              <SettingOutlined style={{ color: "#fff", fontSize: "25px", cursor: "pointer" }} />
      </Popover>

              
              </div>
            </div>
            <div className="sidebar-name-image">
              <img
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                height="45px"
                alt="user"
                style={{ borderRadius: "50%" }}
              />
              <div style={{ color: "#fff", paddingLeft: "10px" }}>{user.username ? user.username : ""}</div>
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
