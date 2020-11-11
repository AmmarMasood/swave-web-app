import React,{useContext, useEffect, useState} from "react";
import aiImage from "../../Images/group-computers-5381724.jpg";
import "../../Styles/ModuleBuilder.css";
import {dataContext,selectedClassContext} from "../../State/Store";
import {
  EditOutlined,
  // PlusCircleFilled,
  // MinusCircleFilled,
  PlusOutlined
} from "@ant-design/icons";
import { Modal, Button } from "antd";
function ClassBuilderAdmin() {
  const [data, setData] = useContext(dataContext);
  const [selectedClass, setSelectedClass] = useContext(selectedClassContext);
  const [className, setClassName] = useState("");
  const [classSummary, setClassSummary] = useState("");
  const [editClassOpen, setEditClassOpen] = useState(false);
  useEffect(() => {
    if(selectedClass>=0){
      setClassName(data.moduleClasses[selectedClass].adminSuggestionForClass.className);
      setClassSummary(data.moduleClasses[selectedClass].adminSuggestionForClass.classSummary);
    }
  }, [])
  function handleChange(e){
    setData(prev => ({ 
      ...prev,
      adminSuggestionForModule: {
        ...prev.adminSuggestionForModule,
      [e.target.name]: e.target.value
      }
  }))
  }
  function addClass(){
    if(selectedClass<0){
    const newClasses = [...data.moduleClasses, {className: "", classSummary: "", sessions: [], adminSuggestionForClass: {className, classSummary}}];
    setData({...data, moduleClasses: newClasses});
    }else{
      const newClass= [...data.moduleClasses];
      newClass[selectedClass] = {...newClass[selectedClass],adminSuggestionForClass: {className, classSummary}};
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
            <div key={i} className="tag tag-hover" onClick={() => selectClass(i, val.adminSuggestionForClass.className, val.adminSuggestionForClass.classSummary)}>
               {val.adminSuggestionForClass.className}
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
          <input className="module-name-input-admin" 
          disabled={localStorage.getItem("role") === "ADMIN" ? false : true}
          onChange={(e) => handleChange(e)}
          value={data.adminSuggestionForModule.moduleName} 
          />
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="module-name-container-admin">
        <label className="module-name-label-admin">Class Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input-admin" 
            onChange={(e) => setClassName(e.target.value)}
          disabled={localStorage.getItem("role") === "ADMIN" ? false : true}
          value={className} 
         />
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
      {/* <div className="module-name-container-admin">
        <label className="module-name-label-admin">Number Of Classes</label>
        <div className="module-class-input-container">
          <input className="module-name-input-admin" />
          {/* <MinusCircleFilled className="class-icon" />
          <PlusCircleFilled className="class-icon" /> */}
      {/* </div> */}
      {/* </div>  */}
      {/*  */}
      <div className="module-name-container-admin">
        <label className="module-name-label-admin">Class Summary</label>
        <div
          className="module-name-input-container"
          style={{ alignItems: "start" }}
        >
          <textarea
            className="module-name-input-admin"
            name="message"
            rows="3"
            cols="10"
            value={classSummary}
            onChange={(e) => setClassSummary(e.target.value)}
            disabled={localStorage.getItem("role") === "ADMIN" ? false : true}
          ></textarea>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {localStorage.getItem("role") === "ADMIN" ?  <>
      <button className="add-notes-button" style={{backgroundColor: "#6ddfba" ,color: "#195a8b"}} onClick={addClass}>
      <PlusOutlined /> {selectedClass < 0 ? "Create Class" : 'Update Class'}
      </button>
      <button className="add-notes-button" style={{backgroundColor: "#6ddfba" ,color: "#195a8b"}} onClick={() => setEditClassOpen(true)}>
      Open Class
      </button>
</>: ""}
      {/*  */}
    </div>
  );
}
export default ClassBuilderAdmin;
