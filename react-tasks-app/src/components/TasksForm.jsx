import { useContext,useState } from "react";
import { TaskContext } from "../Context/TaskContext";
export function TaskForm() {
  const [task, setTask] = useState("");
 const [desp, setDesp] = useState("");
 const{createTask} = useContext(TaskContext); 
  function hadleChange(e) {
    setTask(e.target.value);
  }

  const handleChangeT = (e) => {
    setDesp(e.target.value); 
  }
//   function handleSubmitF(){ }
  const handleSubmit = (e)=>{
    e.preventDefault(); 
    console.log(task)
    createTask(task,desp);
    setTask(''); 
    setDesp(''); 
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div> 
        <input
           id="input1"
           value={task}
          type="text"
          placeholder="Escribe tu tarea"
          onChange={hadleChange}
        autoFocus
        />          
        </div>
        <br /> 
        <div>
          <span> </span>
        <textarea value={desp} cols="30" rows="10" placeholder="Añade Una Descripcion a tu Tarea: " onChange={handleChangeT}></textarea>
        </div>
        <div>
        <button>Guardar</button>
        </div>
      </form>
    </div>
  );
}
