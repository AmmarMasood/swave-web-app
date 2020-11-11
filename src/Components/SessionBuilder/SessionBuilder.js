import React, { useState, useContext, useEffect } from "react";
import mentorImage from "../../Images/woman-writing-marker-whiteboard.jpg";
import "../../Styles/ModuleBuilder.css";
import {
  EditOutlined,
  PlusCircleFilled,
  PlusOutlined
  // MinusCircleFilled,
  // PlusOutlined
} from "@ant-design/icons";
import TopImage from "../../Images/Group 6241@1XXX.png";
import { componentContext,dataContext,selectedClassContext,selectedSessionContext } from "../../State/Store";
import { Modal, Input, TimePicker, Button } from "antd";

import axios from 'axios';
import setAuthToken from "../../setAuthToken";
import {server} from "../../Server"
function SessionBuilder() {
  const [displayComponent, setDisplayComponent] = useContext(componentContext);
  const [data, setData] = useContext(dataContext);
  const [selectedClass, setSelectedClass] = useContext(selectedClassContext);
  const [timelinePopup, setOpenTimelinePopup] = useState(false);
  const [timelineName, setTimeLineName] = useState("");

  const [sessionName, setSessionName] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [editSessionOpen, setEditSessionOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useContext(selectedSessionContext);
  
  function createSessionTimeline() {}
  useEffect(() => {
    if(selectedClass>=0 && selectedSession>=0){
      setSessionName(data.moduleClasses[selectedClass].sessions[selectedSession].sessionName);
      setSessionTime(data.moduleClasses[selectedClass].sessions[selectedSession].sessionTime);
    }
  }, [])
  function saveModule(){
    setAuthToken(localStorage.getItem("token"));
    axios.post(`${server}/v1/module`, data).then(res => {console.log(res); alert("Saved")}).catch(err => console.log(err))
  }
  function selectSession(id, sessionName, sessionTime){
    setEditSessionOpen(false)
    setSessionName(sessionName);
    setSessionTime(sessionTime);
    setSelectedSession(id);
  }
  function addSession(){
      if(selectedSession<0){
      const newClasses = [...data.moduleClasses];
      newClasses[selectedClass].sessions.push({sessionName, sessionTime, adminSuggestionForSession: {sessionName: "", sessionTime: ""}});
      setData({...data, moduleClasses: newClasses});
      }else{
        const newClass= [...data.moduleClasses];
        newClass[selectedClass].sessions[selectedSession] = {...newClass[selectedClass].sessions[selectedSession],sessionName, sessionTime};
        setData({...data, moduleClasses:newClass})
      }
     
      setSessionName("");
      setSessionTime("");
      setSelectedSession(-1);
    
  }
  return (
    <div>

      <Modal
        title="Session Timeline"
        visible={timelinePopup}
        onOk={createSessionTimeline}
        onCancel={() => setOpenTimelinePopup(false)}
        footer={false}
      >
        <p>Name</p>
        <Input
          value={timelineName}
          onChange={e => setTimeLineName(e.target.value)}
        />
        <p style={{ marginTop: "10px" }}>Time</p>
        <TimePicker style={{ width: "100%" }} onChange={e => console.log(e)} />
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <Button style={{ backgroundColor: "#195a8b", color: "#fff" }}>
            Create
          </Button>
        </div>
      </Modal>
      {/* modal for selecting session */}
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
            <div key={i} className="tag tag-hover" onClick={() => selectSession(i, val.sessionName, val.sessionTime)}>
               <div style={{fontSize:"10px"}}>{val.sessionName}</div>
               <div style={{fontSize:"10px"}}>{val.sessionTime}</div>
            </div>
          ))}
        </div>
      </div>
        <div>
      
        </div>
      </Modal>
      {/*  */}
      <div className="mentor">
        <img className="mentor-image" src={mentorImage} alt="mentor" />
        <div className="mentor-text">Mentor</div>
      </div>
      {/*  */}
      <div style={{paddingLeft:"30px"}}>{selectedSession >= 0 && `Selected Session: ${selectedSession+1}`}</div>
      <div className="module-name-container">
        <label className="module-name-label">Module Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input" value={data.moduleName} disabled={true}/>
          <EditOutlined style={{ color: "#195a8b" }} />
        </div>
      </div>
      {/*  */}
      <div className="module-name-container">
        <label className="module-name-label">Class Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input" value={selectedClass < 0 ? "Please select a class" :data.moduleClasses[selectedClass].className} disabled={true}/>
          <EditOutlined style={{ color: "#195a8b" }} />
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="module-name-container">
        <label className="module-name-label">Session Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input" value={sessionName} onChange={e => setSessionName(e.target.value)}  disabled={localStorage.getItem("role") === "ADMIN" ? true : false}/>
          <EditOutlined style={{ color: "#195a8b" }} />
        </div>
      </div>
      {/*  */}
       {/*  */}
       <div className="module-name-container">
        <label className="module-name-label">Session Time</label>
        <div className="module-name-input-container">
          <input className="module-name-input" value={sessionTime} onChange={e => setSessionTime(e.target.value)}  disabled={localStorage.getItem("role") === "ADMIN" ? true : false}/>
          <EditOutlined style={{ color: "#195a8b" }} />
        </div>
      </div>
      {/*  */}
      {localStorage.getItem("role") === "ADMIN" ? "" : <>
      <button className="add-notes-button" onClick={selectedClass<0 ? () => alert("Please select class first") : addSession}>
      <PlusOutlined /> {selectedSession < 0 ? "Create Session" : 'Update Session'}
      </button>
      <button className="add-notes-button" onClick={selectedClass<0 ? () => alert("Please select class first") : () => setEditSessionOpen(true)}>
      Open Session
      </button>
</>}
      
      {/*  */}
      {/* <div className="module-name-container">
        <label className="module-name-label">Number Of Classes</label>
        <div className="module-class-input-container">
          <input className="module-name-input" />
          <MinusCircleFilled className="class-icon" />
          <PlusCircleFilled className="class-icon" />
        </div>
      </div> */}
      {/*  */}
      {/* <div className="module-name-container" style={{ marginBottom: "100px" }}>
        <label className="module-name-label">Module Summary</label> */}
        {/* <div
          className="module-name-input-container"
          style={{ alignItems: "start" }}
        >
          <div
            className="module-name-input timeline-blocks-container"
            style={{ height: "140px" }}
          > */}
            {/* blocsk */}
            {/* <div className="timeline-blocks">
              <div className="timeline-blocks-text">simething something</div>
              <div className="timeline-blocks-text">12:00</div>
            </div> */}
            {/* blocks */}
          {/* </div>
          <PlusCircleFilled
            className="class-icon"
            onClick={() => setOpenTimelinePopup(true)}
          />
        </div>
      </div> */}
      {/*  */}
 
      <div className="middle-part" style={{height: "99vh"}}>
        <div style={{ textAlign: "center" }}>
          <img style={{ height: "130px" }} src={TopImage} alt="top" />
        </div>
        <div>
          {" "}
          <button
            className="save-modules-button"
            onClick={saveModule}
          >
            Save Session
          </button>
        </div>
      </div>
    </div>
  );
}
export default SessionBuilder;
