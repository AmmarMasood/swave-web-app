import React, { useState, useContext } from "react";
import mentorImage from "../../Images/woman-writing-marker-whiteboard.jpg";
import "../../Styles/ModuleBuilder.css";
import {
  EditOutlined,
  PlusCircleFilled
  // MinusCircleFilled,
  // PlusOutlined
} from "@ant-design/icons";
import TopImage from "../../Images/Group 6241@1XXX.png";
import { componentContext } from "../../State/Store";
import { Modal, Input, TimePicker, Button } from "antd";

function SessionBuilder() {
  const [displayComponent, setDisplayComponent] = useContext(componentContext);
  const [timelinePopup, setOpenTimelinePopup] = useState(false);
  const [timelineName, setTimeLineName] = useState("");
  function createSessionTimeline() {}
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
      {/*  */}
      <div className="module-name-container">
        <label className="module-name-label">Session Name</label>
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
      <div className="module-name-container" style={{ marginBottom: "100px" }}>
        <label className="module-name-label">Module Summary</label>
        <div
          className="module-name-input-container"
          style={{ alignItems: "start" }}
        >
          <div
            className="module-name-input timeline-blocks-container"
            style={{ height: "140px" }}
          >
            {/* blocsk */}
            <div className="timeline-blocks">
              <div className="timeline-blocks-text">simething something</div>
              <div className="timeline-blocks-text">12:00</div>
            </div>
            {/* blocks */}
          </div>
          <PlusCircleFilled
            className="class-icon"
            onClick={() => setOpenTimelinePopup(true)}
          />
        </div>
      </div>
      {/*  */}

      <div className="middle-part">
        <div style={{ textAlign: "center" }}>
          <img style={{ height: "130px" }} src={TopImage} alt="top" />
        </div>
        <div>
          {" "}
          <button
            className="save-modules-button"
            onClick={() => setDisplayComponent(3.1)}
          >
            Save Session
          </button>
        </div>
      </div>
    </div>
  );
}
export default SessionBuilder;
