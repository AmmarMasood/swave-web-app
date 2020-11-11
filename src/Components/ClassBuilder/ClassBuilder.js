import React, {useContext, useState, useEffect} from "react";
import mentorImage from "../../Images/woman-writing-marker-whiteboard.jpg";
import "../../Styles/ModuleBuilder.css";
import {
  EditOutlined,
  // PlusCircleFilled,
  // MinusCircleFilled,
  PlusOutlined
} from "@ant-design/icons";
import TopImage from "../../Images/Group 6241@1XX.png";
import {dataContext,selectedClassContext} from "../../State/Store";
import { Modal, Button } from "antd";
import axios from 'axios';
import setAuthToken from "../../setAuthToken";
import {server} from "../../Server"
function ClassBuilder() {
  const [data, setData] = useContext(dataContext);
  const [selectedClass, setSelectedClass] = useContext(selectedClassContext);
  const [className, setClassName] = useState("");
  const [classSummary, setClassSummary] = useState("");
  const [editClassOpen, setEditClassOpen] = useState(false);
  useEffect(() => {
    if(selectedClass>=0){
      setClassName(data.moduleClasses[selectedClass].className);
      setClassSummary(data.moduleClasses[selectedClass].classSummary);
    }
  }, [])
  function saveModule(){
    setAuthToken(localStorage.getItem("token"));
    axios.post(`${server}/v1/module`, data).then(res => {console.log(res); alert("Saved")}).catch(err => console.log(err))
  }
  function handleChange(e){
    setData(prev => ({ 
      ...prev,
      [e.target.name]: e.target.value,
  }));

 
  }
  function addClass(){
    if(selectedClass<0){
    const newClasses = [...data.moduleClasses, {className, classSummary, sessions: [], adminSuggestionForClass: {className: "", classSummary: ""}}];
    setData({...data, moduleClasses: newClasses});
    }else{
      const newClass= [...data.moduleClasses];
      newClass[selectedClass] = {className, classSummary, sessions:newClass[selectedClass].sessions };
      setData({...data, moduleClasses:newClass})
    }
    setClassName("");
    setClassSummary("");
    setSelectedClass(-1);
  }
  function selectClass(id, className, classSummary){
    setEditClassOpen(false)
    setClassName(className);
    setClassSummary(classSummary);
    setSelectedClass(id);
  }
  return (
    <div>
      {/*  */}
      <Modal
        title="Select Class To Edit"
        visible={editClassOpen}
        onCancel={() => setEditClassOpen(false)}
        footer={false}
      >
           <div className="tags-container" style={{height: "100%", padding: "0"}} >
        <div className="tags-container-inside" style={{height: "100%", padding: "0"}}>
        <div  className="tag tag-hover" onClick={() => selectClass(-1, "", "")}>
        <PlusOutlined /> New Class
            </div>
        {data.moduleClasses.length > 0 && data.moduleClasses.map((val, i) => (
            <div key={i} className="tag tag-hover" onClick={() => selectClass(i, val.className, val.classSummary)}>
               {val.className}
            </div>
          ))}
        </div>
      </div>
        <div>
      
        </div>
      </Modal>
      <div className="mentor">
        <img className="mentor-image" src={mentorImage} alt="mentor" />
        <div className="mentor-text">Mentor</div>
      </div>
      {/*  */}
      <div style={{paddingLeft:"30px"}}>{selectedClass >= 0 && `Selected Class: ${selectedClass+1}`}</div>
      <div className="module-name-container" style={{margin: "30px 30px 30px 30px"}}>
     
        <label className="module-name-label">Module Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input"   disabled={localStorage.getItem("role") === "ADMIN" ? true : false} value={data.moduleName} name="moduleName" onChange={(e) => handleChange(e)}/>
          <EditOutlined style={{ color: "#195a8b" }} />
        </div>
      </div>
      {/*  */}
      <div className="module-name-container">
        <label className="module-name-label">Class Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input" value={className} 
          onChange={(e) => setClassName(e.target.value)}
          disabled={localStorage.getItem("role") === "ADMIN" ? true : false}
          />
          <EditOutlined style={{ color: "#195a8b" }}/>
        </div>
      </div>
      {/*  */}
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
      <div className="module-name-container">
        <label className="module-name-label">Class Summary</label>
        <div
          className="module-name-input-container"
          style={{ alignItems: "start" }}
        >
          <textarea
            className="module-name-input"
            name="message"
            rows="3"
            cols="10"
            value={classSummary} onChange={(e) => setClassSummary(e.target.value)}
            disabled={localStorage.getItem("role") === "ADMIN" ? true : false}
          ></textarea>
          <EditOutlined style={{ color: "#195a8b" }} />
        </div>
      </div>
      {/*  */}
      {/* <div className="module-name-container" >
        <label className="module-name-label">Module Goal</label>
        <div
          className="module-name-input-container"
          style={{ alignItems: "start" }}
        >
          <textarea
            className="module-name-input"
            name="message"
            rows="3"
            cols="10"
          ></textarea>
          <EditOutlined style={{ color: "#195a8b" }} />
        </div>
      </div> */}
{localStorage.getItem("role") === "ADMIN" ? "" : <>
      <button className="add-notes-button" onClick={addClass}>
      <PlusOutlined /> {selectedClass < 0 ? "Create Class" : 'Update Class'}
      </button>
      <button className="add-notes-button" onClick={() => setEditClassOpen(true)}>
      Open Class
      </button>
</>}

      <div className="middle-part" style={{ height: "95vh" }}>
        <div style={{ textAlign: "center" }}>
          <img style={{ height: "130px" }} src={TopImage} alt="top" />
        </div>
        <div>
          {" "}
          <button className="save-modules-button" onClick={saveModule}>Save Class</button>
        </div>
      </div>
    </div>
  );
}
export default ClassBuilder;
