import React from "react";

export default function Task({ task, onDelete }) {
  return (
    <div className="task-container">
      <h4>{task}</h4>
      <i
        className="fa fa-times"
        style={{ cursor: "pointer", fontSize: "35px" }}
        onClick={onDelete}
      ></i>
    </div>
  );
}
