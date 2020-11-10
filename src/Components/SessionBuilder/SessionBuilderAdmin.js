import React, {useContext, useState, useEffect} from "react";
import aiImage from "../../Images/group-computers-5381724.jpg";
import "../../Styles/ModuleBuilder.css";
import {dataContext, selectedClassContext, selectedSessionContext} from "../../State/Store"

function SessionBuilderAdmin() {
  const [data, setData] = useContext(dataContext);
  const [selectedClass, setSelectedClass] = useContext(selectedClassContext);
  const [selectedSession, setSelectedSession] = useContext(selectedSessionContext);
  const [sessionName, setSessionName] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  useEffect(() => {
    if(selectedClass>=0 && selectedSession>=0){
      setSessionName(data.moduleClasses[selectedClass].sessions[selectedSession].adminSuggestionForSession.sessionName);
      setSessionTime(data.moduleClasses[selectedClass].sessions[selectedSession].adminSuggestionForSession.sessionTime);
    }
  }, [])
  return (
    <div>
      {/*  */}
      <div className="mentor">
        <img className="mentor-image" src={aiImage} alt="mentor" />
        <div className="mentor-text" style={{ color: "#fff" }}>
          SWave AI
        </div>
      </div>
      {/*  */}
      <div className="module-name-container-admin">
        <label className="module-name-label-admin">Module Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input-admin" value={data.adminSuggestionForModule.moduleName} disabled={true}/>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="module-name-container-admin">
        <label className="module-name-label-admin">Class Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input-admin" value={data.moduleClasses[selectedClass] ?data.moduleClasses[selectedClass].adminSuggestionForClass.className: "" } disabled={true}/>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="module-name-container-admin">
        <label className="module-name-label-admin">Session Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input-admin" value={sessionName} disabled={true}/>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
       {/*  */}
       <div className="module-name-container-admin">
        <label className="module-name-label-admin">Session Time</label>
        <div className="module-name-input-container">
          <input className="module-name-input-admin" value={sessionTime} disabled={true}/>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/* <div className="module-name-container-admin">
        <label className="module-name-label-admin">Module Summary</label>
        <div
          className="module-name-input-container"
          style={{ alignItems: "start" }}
        >
          <div
            className="module-name-input-admin"
            style={{ height: "140px" }}
          ></div> */}
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        {/* </div>
      </div> */}
      {/*  */}
    </div>
  );
}
export default SessionBuilderAdmin;
