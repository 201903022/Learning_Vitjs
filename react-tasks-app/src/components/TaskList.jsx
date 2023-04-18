import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskList() {
  const {tasks} = useContext(TaskContext); 
  if (tasks.length === 0) {
    return <h1> No hay tareas aun. </h1>;
  }
  return (
    <div>
      <h1> Hola Mundo</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}  />
      ))}
      <h1> Adios Mundo</h1>
    </div>
  );
}

export default TaskList;
