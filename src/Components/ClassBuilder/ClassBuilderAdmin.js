import React,{useContext, useEffect, useState} from "react";
import aiImage from "../../Images/group-computers-5381724.jpg";
import "../../Styles/ModuleBuilder.css";
import {dataContext,selectedClassContext} from "../../State/Store";

function ClassBuilderAdmin() {
  const [data, setData] = useContext(dataContext);
  const [selectedClass, setSelectedClass] = useContext(selectedClassContext);
  const [className, setClassName] = useState("");
  const [classSummary, setClassSummary] = useState("");
  useEffect(() => {
    if(selectedClass>=0){
      setClassName(data.moduleClasses[selectedClass].adminSuggestionForClass.className);
      setClassSummary(data.moduleClasses[selectedClass].adminSuggestionForClass.classSummary);
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
          <input className="module-name-input-admin" value={className} disabled={true}/>
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
            value={classSummary} disabled={true}
          ></textarea>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
    </div>
  );
}
export default ClassBuilderAdmin;
