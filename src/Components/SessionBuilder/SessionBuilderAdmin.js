import React, {useContext, useState, useEffect} from "react";
import aiImage from "../../Images/group-computers-5381724.jpg";
import "../../Styles/ModuleBuilder.css";
import {
  EditOutlined,
  PlusCircleFilled,
  PlusOutlined
  // MinusCircleFilled,
  // PlusOutlined
} from "@ant-design/icons";
import {dataContext, selectedClassContext, selectedSessionContext} from "../../State/Store"
import { Modal, Input, TimePicker, Button } from "antd";

function SessionBuilderAdmin() {
  const [data, setData] = useContext(dataContext);
  const [selectedClass, setSelectedClass] = useContext(selectedClassContext);
  const [selectedSession, setSelectedSession] = useContext(selectedSessionContext);
  const [sessionName, setSessionName] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [editSessionOpen, setEditSessionOpen] = useState(false);

  useEffect(() => {
    if(selectedClass>=0 && selectedSession>=0){
      setSessionName(data.moduleClasses[selectedClass].sessions[selectedSession].adminSuggestionForSession.sessionName);
      setSessionTime(data.moduleClasses[selectedClass].sessions[selectedSession].adminSuggestionForSession.sessionTime);
    }
  }, [])
  function addSession(){
    if(selectedSession<0){
    const newClasses = [...data.moduleClasses];
    newClasses[selectedClass].sessions.push({sessionName: "", sessionTime: "", adminSuggestionForSession: {sessionName, sessionTime}});
    setData({...data, moduleClasses: newClasses});
    }else{
      const newClass= [...data.moduleClasses];
      newClass[selectedClass].sessions[selectedSession] = {...newClass[selectedClass].sessions[selectedSession],adminSuggestionForSession: {sessionName, sessionTime} };
      setData({...data, moduleClasses:newClass})
    }
   
    setSessionName("");
    setSessionTime("");
    setSelectedSession(-1);
  
}
  function selectSession(id, sessionName, sessionTime){
    setEditSessionOpen(false)
    setSessionName(sessionName);
    setSessionTime(sessionTime);
    setSelectedSession(id);
  }
  return (
    <div>
      {/*  */}
      <Modal
        title="Select Class To Edit"
        visible={editSessionOpen}
        onCancel={() => setEditSessionOpen(false)}
        footer={false}
      >
           <div className="tags-container" style={{height: "100%", padding: "0"}} >
        <div className="tags-container-inside" style={{height: "100%", padding: "0"}}>
        <div  className="tag tag-hover" onClick={() => selectSession(-1, "", "")}>
        <PlusOutlined /> New Session
            </div>
        {selectedClass< 0 ? "Please select a class first" : 
        data.moduleClasses[selectedClass].sessions.length > 0 &&  data.moduleClasses[selectedClass].sessions.map((val, i) => (
            <div key={i} className="tag tag-hover" onClick={() => selectSession(i, val.adminSuggestionForSession.sessionName, val.adminSuggestionForSession.sessionTime)}>
               <div style={{fontSize:"10px"}}>{val.adminSuggestionForSession.sessionName}</div>
               <div style={{fontSize:"10px"}}>{val.adminSuggestionForSession.sessionTime}</div>
            </div>
          ))}
        </div>
      </div>
        <div>
      
        </div>
      </Modal>
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
          <input className="module-name-input-admin" value={sessionName} onChange={e => setSessionName(e.target.value)}  disabled={localStorage.getItem("role") === "ADMIN" ? false : true}/>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
       {/*  */}
       <div className="module-name-container-admin">
        <label className="module-name-label-admin">Session Time</label>
        <div className="module-name-input-container">
          <input className="module-name-input-admin" value={sessionTime} disabled={true} onChange={e => setSessionTime(e.target.value)}  disabled={localStorage.getItem("role") === "ADMIN" ? false : true}/>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {localStorage.getItem("role") === "ADMIN" ?  <>
      <button className="add-notes-button"  style={{backgroundColor: "#6ddfba" ,color: "#195a8b"}} onClick={selectedClass<0 ? () => alert("Please select class first") : addSession}>
      <PlusOutlined /> {selectedSession < 0 ? "Create Session" : 'Update Session'}
      </button>
      <button className="add-notes-button"  style={{backgroundColor: "#6ddfba" ,color: "#195a8b"}} onClick={selectedClass<0 ? () => alert("Please select class first") : () => setEditSessionOpen(true)}>
      Open Session
      </button>
</>: ""}

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
