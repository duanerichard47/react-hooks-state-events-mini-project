import React from "react";
import Task from "./Task"

function TaskList({categories, tasks}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <Task  tasks ={tasks} />
    </div>
  );
}

export default TaskList;
