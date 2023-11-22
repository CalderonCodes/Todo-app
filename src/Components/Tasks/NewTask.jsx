import {useState} from "react";

import useStore from "../../taskStore";

import { v4 as uuidv4 } from 'uuid';

function NewTask() {
  const [task, setTask] = useState(
    {
      id: uuidv4(),
      content: '',
      isCompleted: false,
    }
  );

  const { tasks, addTask} = useStore();

  const handleInputChange = (event) => {
    setTask({
      ...task,
      content: event.target.value,
    });
  };

   const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(task);
    addTask(task);

    // Restablece el estado del formulario
    setTask({
      id: uuidv4(),
      content: '', // Cambiado de 'task' a 'content'
      isCompleted: false,
    });
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full rounded-lg bg-base-200 flex justify-center text-primary lg:justify-start px-5 items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <button type="submit" className="btn btn-circle btn-xs hover:bg-inherit hover:border-2 btn-outline"></button>
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
