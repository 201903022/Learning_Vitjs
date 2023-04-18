import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TaskForm } from "./components/TasksForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
