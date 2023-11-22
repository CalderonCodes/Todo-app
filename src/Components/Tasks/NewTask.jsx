import { useState } from "react";

import useStore from "../../taskStore";

import { v4 as uuidv4 } from "uuid";

function NewTask() {
  const [task, setTask] = useState({
    id: uuidv4(),
    content: "",
    isCompleted: false,
  });

  const [error, setError] = useState(false);

  const { tasks, addTask } = useStore();

  const handleInputChange = (event) => {
    setError(false);
    setTask({
      ...task,
      content: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.content === "") {
      setError(true);
      console.log("No hay nada que agregar");
      return;
    } else {
      addTask(task);

      // Restablece el estado del formulario
      setTask({
        id: uuidv4(),
        content: "", // Cambiado de 'task' a 'content'
        isCompleted: false,
      });
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {error && (<div role="alert" className="alert alert-error rounded-lg w-1/2   h-8 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! This task is empty.</span>
      </div>)}
      <div className="w-full rounded-lg bg-base-200 flex justify-center text-primary lg:justify-start px-5 items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <button
          type="submit"
          className="btn btn-circle btn-xs hover:bg-inherit hover:border-2 btn-outline"
        ></button>
        <input
          type="text"
          placeholder="Create new todo..."
          className="input lg:h-16 lg:text-lg input-ghost w-full text-accent focus:bg-inherit placeholder:text-accent font-semibold focus:outline-none focus:border-0 max-w-xs"
          value={task.content}
          onChange={handleInputChange}
        />
      </div>
      
    </form>
  );
}

export default NewTask;
