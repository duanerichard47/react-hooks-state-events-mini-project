import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App({ CATEGORIES, TASKS } ) {
  console.log({ CATEGORIES, TASKS });
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList categories ={CATEGORIES} tasks ={TASKS}/>
    </div>
  );
}

export default App;
