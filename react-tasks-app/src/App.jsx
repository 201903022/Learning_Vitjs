import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TaskForm } from "./components/TasksForm";
import TaskList from "./components/TaskList";
import { Tareas } from "./Data/Tareas";

function App() {
  console.log(`Tareas: ${Tareas}`);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(Tareas);
  }, []);

  function deleteTask(id){
    console.log(`Id to Delete: ${id}`)
    setTasks(tasks.filter(n => n.id !== id));
  }
  function createTask(title,description){
    setTasks([...tasks,{
      id: tasks.length,
      title: title,
      description:description      
    }])
  }

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
