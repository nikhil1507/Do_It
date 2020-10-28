import React, { useState } from "react";
import Joi from "joi";
import "../../styles/main.scss";
import Task from "../Task";
import TaskInput from "../TaskInput";

export default function Todo() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const { error } = schema.validate({ task: input });
    if (error) return setError(error.details[0].message);
    setTask([...task, { id: Date.now(), task: input }]);
    setInput("");
    console.log(task);
  };

  const handleTaskChange = (e) => {
    setError("");
    setInput(e.target.value);
    console.log(input);
  };

  const handleDelete = (id) => {
    const newTask = task.filter((i) => i.id !== id);
    setTask(newTask);
  };

  const schema = Joi.object({
    task: Joi.string().required().min(5).max(100).label("Task"),
  });

  return (
    <div className="todo-user">
      <div className="todo-container">
        <TaskInput
          inputValue={input}
          onChange={handleTaskChange}
          onSubmit={handleTaskSubmit}
          error={error}
        />
        {/* map the task through the state of input */}
        {task.map((task) => (
          <Task
            key={task.id}
            onDelete={() => handleDelete(task.id)}
            task={task.task}
          />
        ))}
      </div>
    </div>
  );
}
