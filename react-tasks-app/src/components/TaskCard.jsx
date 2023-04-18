import React from "react";
import { TaskContext } from "../Context/TaskContext";
import { useContext } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold capitalize p-2">{task.title} </h2>
      <p className="text-gray-600 text-sm p-4">{task.description} </p>
      <button className="bg-red-500 px-2 py-3 rounded-xl mt-4  hover:bg-red-200"  onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
