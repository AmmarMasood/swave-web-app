import React, {useContext} from "react";
import aiImage from "../../Images/group-computers-5381724.jpg";
import "../../Styles/ModuleBuilder.css";
import {dataContext} from "../../State/Store";

function ModuleBuilderAdmin() {
  const [data, setData] = useContext(dataContext);
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
        <label className="module-name-label-admin">Division Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input-admin" value={data.adminSuggestionForModule.divisionName} disabled={true}/>
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
            value={data.adminSuggestionForModule.moduleSummary} disabled={true}
          ></textarea>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
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
