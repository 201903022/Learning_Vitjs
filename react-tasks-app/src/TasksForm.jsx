import { useState } from "react";
export function TaskForm({createTask}) {
  const [task, setTask] = useState("");
 
  function hadleChange(e) {
    setTask(e.target.value);
  }

//   function handleSubmitF(){ }
  const handleSubmit = (e)=>{
    e.preventDefault(); 
    console.log(task)
    createTask(task);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={hadleChange}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}
