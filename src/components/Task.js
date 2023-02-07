import React from "react";

function Task({tasks}) {

tasks.map(task) => {
  return
  < div  key={task.text} text={task.text} category={task.category} ></div>/> })

  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
