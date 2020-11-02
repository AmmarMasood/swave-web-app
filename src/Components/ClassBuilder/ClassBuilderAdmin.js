import React from "react";
import aiImage from "../../Images/group-computers-5381724.jpg";
import "../../Styles/ModuleBuilder.css";

function ClassBuilderAdmin() {
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
          <input className="module-name-input-admin" />
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="module-name-container-admin">
        <label className="module-name-label-admin">Class Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input-admin" />
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
          ></textarea>
          {/* <EditOutlined style={{ color: "#195a8b" }} /> */}
        </div>
      </div>
      {/*  */}
    </div>
  );
}
export default ClassBuilderAdmin;
