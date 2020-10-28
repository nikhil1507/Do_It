import React from "react";

export default function TaskInput({ error, inputValue, onSubmit, onChange }) {
  return (
    <form>
      <div className="form-group">
        <input
          placeholder="Add New Task"
          type="text"
          className="form-control"
          value={inputValue}
          onChange={onChange}
        />
        {error && (
          <small style={{ color: "#f05454" }} className="form-text">
            {error}
          </small>
        )}
      </div>
      <button onClick={onSubmit} className="btn btn-dark" type="Submit">
        Add
      </button>
    </form>
  );
}
