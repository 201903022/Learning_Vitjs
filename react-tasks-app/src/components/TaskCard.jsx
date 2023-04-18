import React from "react";
import { TaskContext } from "../Context/TaskContext";
import { useContext } from "react";

function TaskCard({task}) {

  const {deleteTask} = useContext(TaskContext); 
  return (
    <div>
      <h2>{task.title} </h2>
      <p>{task.description} </p>
      <button onClick={()=>deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
