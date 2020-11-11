import React, {useContext, useState} from "react";
import aiImage from "../../Images/group-computers-5381724.jpg";
import "../../Styles/ModuleBuilder.css";
import {dataContext,adminAllModules,selectedClassContext, selectedSessionContext} from "../../State/Store";
import {
  EditOutlined,
  // PlusCircleFilled,
  // MinusCircleFilled,
  PlusOutlined
} from "@ant-design/icons";
import {Modal} from 'antd';
function ModuleBuilderAdmin() {
  const [data, setData] = useContext(dataContext);
  const [selectedClass, setSelectedClass] = useContext(selectedClassContext);
  const [selectedSession, setSelectedSession] = useContext(selectedSessionContext);
  const [allModules, setAllModules] = useContext(adminAllModules);
  const [moduleSelectOpen, setModuleSelectOpen] = useState(false);
  function handleChange(e){
    setData(prev => ({ 
      ...prev,
      adminSuggestionForModule: {
        ...prev.adminSuggestionForModule,
      [e.target.name]: e.target.value
      }
  }))
  }
  return (
    <div>
      <Modal
        title="Select Module"
        visible={moduleSelectOpen}
        onCancel={() => setModuleSelectOpen(false)}
        footer={false}
      >
           <div className="tags-container" style={{height: "100%", padding: "0"}} >
        <div className="tags-container-inside" style={{height: "100%", padding: "0"}}>
        <div  className="tag tag-hover" onClick={() => {setData({
    moduleName: "",
    divisionName: "",
    moduleSummary: "",
    moduleClasses: [],
    adminSuggestionForModule:{
      moduleName: "",
      divisionName: "",
      moduleSummary: ""
    }
  }); setSelectedClass(-1); setSelectedSession(-1)}}>
        <PlusOutlined /> New Module
            </div>
        {allModules.length > 0 && allModules.map((val, i) => (
            <div key={i} className="tag tag-hover" onClick={() => setData(val)}>
               {val.moduleName}
               
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
          <input className="module-name-input-admin" name="moduleName" value={data.adminSuggestionForModule.moduleName} onChange={(e) => handleChange(e)} disabled={localStorage.getItem("role") === "ADMIN" ? false : true}/>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="module-name-container-admin">
        <label className="module-name-label-admin">Division Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input-admin" 
         
          name="divisionName" value={data.adminSuggestionForModule.divisionName} onChange={(e) => handleChange(e)} disabled={localStorage.getItem("role") === "ADMIN" ? false : true}
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
        <label className="module-name-label-admin">Module Summary</label>
        <div
          className="module-name-input-container"
          style={{ alignItems: "start" }}
        >
          <textarea
            className="module-name-input-admin"
            name="message"
            rows="3"
            cols="10"
              
          name="moduleSummary" value={data.adminSuggestionForModule.moduleSummary} onChange={(e) => handleChange(e)} disabled={localStorage.getItem("role") === "ADMIN" ? false : true}
          
          ></textarea>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
     
      </div>
      {localStorage.getItem("role") === "ADMIN" ? 
        <button className="add-notes-button" style={{backgroundColor: "#6ddfba" ,color: "#195a8b"}} onClick={() => setModuleSelectOpen(true)}>
        <PlusOutlined /> Open Module
      </button>: ""}
      {/*  */}
      {/* <div className="module-name-container-admin">
        <label className="module-name-label-admin">Module Goal</label>
        <div
          className="module-name-input-container"
          style={{ alignItems: "start" }}
        >
          <textarea
            className="module-name-input-admin"
            name="message"
            rows="3"
            cols="10"
          ></textarea> */}
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}
export default ModuleBuilderAdmin;
