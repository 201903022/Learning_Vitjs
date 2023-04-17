import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TaskForm } from "./TasksForm";
import TaskList from "./TaskList";
import { Tareas } from "./Tareas";

function App() {
  console.log(`Tareas: ${Tareas}`);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(Tareas);
  }, []);

  function createTask(title){
    setTasks([...tasks,{
      id: tasks.length,
      title: title,
      description:"new task"      
    }])
  }

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
