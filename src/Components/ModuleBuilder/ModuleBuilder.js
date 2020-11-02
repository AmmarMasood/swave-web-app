import React from "react";
import mentorImage from "../../Images/woman-writing-marker-whiteboard.jpg";
import "../../Styles/ModuleBuilder.css";
import {
  EditOutlined,
  // PlusCircleFilled,
  // MinusCircleFilled,
  PlusOutlined
} from "@ant-design/icons";
import TopImage from "../../Images/Group 6241@1X.png";

function ModuleBuilder() {
  return (
    <div>
      {/*  */}
      <div className="mentor">
        <img className="mentor-image" src={mentorImage} alt="mentor" />
        <div className="mentor-text">Mentor</div>
      </div>
      {/*  */}
      <div className="module-name-container">
        <label className="module-name-label">Module Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input" />
          <EditOutlined style={{ color: "#195a8b" }} />
        </div>
      </div>
      {/*  */}
      <div className="module-name-container">
        <label className="module-name-label">Division Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input" />
          <EditOutlined style={{ color: "#195a8b" }} />
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
        <label className="module-name-label">Module Summary</label>
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
      </div>
      {/*  */}
      <div className="module-name-container">
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
      </div>

      <button className="add-notes-button">
        <PlusOutlined /> Add Notes
      </button>

      <div className="middle-part">
        <div style={{ textAlign: "center" }}>
          <img style={{ height: "130px" }} src={TopImage} alt="top" />
        </div>
        <div>
          {" "}
          <button className="save-modules-button">Save Modules</button>
        </div>
      </div>
    </div>
  );
}
export default ModuleBuilder;
