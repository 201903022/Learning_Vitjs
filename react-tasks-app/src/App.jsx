import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TaskForm } from "./components/TasksForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-5">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
