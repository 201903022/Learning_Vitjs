import TaskCard from "./TaskCard";

function TaskList({tasks,deleteTask}) {
  if (tasks.length === 0) {
    return <h1> No hay tareas aun. </h1>;
  }
  return (
    <div>
      <h1> Hola Mundo</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
      <h1> Adios Mundo</h1>
    </div>
  );
}

export default TaskList;
