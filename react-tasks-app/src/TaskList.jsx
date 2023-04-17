
function TaskList({tasks}) {
  if (tasks.length === 0) {
    return <h1> No hay tareas aun. </h1>;
  }
  return (
    <div>
      <h1> Hola Mundo</h1>
      {tasks.map((task) => (
        <div key={task.id}> 
        <h2>{task.title} </h2>
        <p>{task.description} </p>
         </div>
      ))}
      <h1> Adios Mundo</h1>
    </div>
  );
}

export default TaskList;
