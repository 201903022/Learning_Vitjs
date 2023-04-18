import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
export function TaskForm() {
  const [task, setTask] = useState("");
  const [desp, setDesp] = useState("");
  const { createTask } = useContext(TaskContext);
  function hadleChange(e) {
    setTask(e.target.value);
  }

  const handleChangeT = (e) => {
    setDesp(e.target.value);
  };
  //   function handleSubmitF(){ }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    createTask(task, desp);
    setTask("");
    setDesp("");
  };
  return (
    <div className="max-w-screen-xl -mx-1">
      {" "}
      {/* mx-auto para centrar*/}
      <form onSubmit={handleSubmit} className="bg-blue-100 p-10 mb-5">
        <h1 className="text-yellow-200 text-2xl font-bold mb-"> Crea Tu Tarea </h1>
        <div>
          <input
            id="input1"
            value={task}
            type="text"
            placeholder="Escribe tu tarea"
            onChange={hadleChange}
            className="bg-slate-300 p-4 w-full mb-10 "
            autoFocus
          />
        </div>
        <br />
        <div>
          <span> </span>
          <textarea
            value={desp}
            rows="5"
            placeholder="Añade Una Descripcion a tu Tarea: "
            onChange={handleChangeT}
            className="bg-slate-300 p-2 w-full mb-5 "
          ></textarea>
        </div>
        <div>
          <button className="bg-cyan-400 p-3 rounded-xl hover:bg-cyan-100">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
