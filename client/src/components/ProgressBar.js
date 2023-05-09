import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;