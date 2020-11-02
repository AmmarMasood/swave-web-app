import React, { useState } from "react";
import mentorImage from "../../Images/woman-writing-marker-whiteboard.jpg";
import "../../Styles/ModuleBuilder.css";
import {
  EditOutlined,
  PlusCircleFilled
  // MinusCircleFilled,
  // PlusOutlined
} from "@ant-design/icons";
import TopImage from "../../Images/Group 6241@1XXX.png";
import { Modal, Input, TimePicker, Button } from "antd";

function SessionBuilderSecond() {
  const [tagValue, setTagValue] = useState("");
  const [tags, setTags] = useState([]);

  function enterTag() {
    setTags([...tags, tagValue]);
    setTagValue("");
  }
  function createSessionTimeline() {}
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
        <label className="module-name-label">Class Name</label>
        <div className="module-name-input-container">
          <input className="module-name-input" />
          <EditOutlined style={{ color: "#195a8b" }} />
        </div>
      </div>
      {/*  */}
      <div className="class-tags">Class Tags</div>
      {/*  */}
      <div className="module-name-container">
        <div className="module-name-input-container">
          <input
            className="module-name-input"
            placeholder="Type your tag here"
            value={tagValue}
            onChange={e => setTagValue(e.target.value)}
          />
          <PlusCircleFilled className="class-icon" onClick={enterTag} />
        </div>
      </div>
      {/*  */}
      <div className="tags-container">
        <div className="tags-container-inside">
          {tags.map((val, key) => (
            <div key={key} className="tag">
              {val}
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="middle-part" style={{ height: "120vh" }}>
        <div style={{ textAlign: "center" }}>
          <img style={{ height: "130px" }} src={TopImage} alt="top" />
        </div>
        <div>
          {" "}
          <button className="save-modules-button">Save Session</button>
        </div>
      </div>
    </div>
  );
}
export default SessionBuilderSecond;
