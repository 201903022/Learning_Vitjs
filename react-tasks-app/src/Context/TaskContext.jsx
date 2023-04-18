import React from "react";
import { createContext, useState, useEffect } from "react";
import { Tareas } from "../Data/Tareas";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(Tareas);
  }, []);

  function deleteTask(id) {
    console.log(`Id to Delete: ${id}`);
    setTasks(tasks.filter((n) => n.id !== id));
  }
  function createTask(title, description) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: title,
        description: description,
      },
    ]);
  }
  let x = 20;
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {" "}
      {props.children}{" "}
    </TaskContext.Provider>
  );
}
