import React, { useEffect, useState } from 'react'

import useStore from "../../taskStore";
function Task({task}) {

  const [isCompleted, setIsCompleted] = useState(false);
  const { tasks, addTask, removeTask, updateTask } = useStore();

  const handleDelete = () => {
    removeTask(task.id)
  };

  const handleComplete = () => {
    task.isCompleted = !task.isCompleted;
    updateTask(task);
    console.log(task);
  };
  

  return (
    <div className="w-full rounded-t-lg h-16 bg-base-200 flex justify-between  text-primary px-5 items-center border-b border-secondary">
      <div className='flex gap-5'>
      <button onClick={handleComplete} className={`btn btn-circle btn-xs   hover:bg-inherit hover:border-2  ${task.isCompleted === true ? 'bg-check-background border-none ' : 'bg-inherit'} transition-none btn-outline`}>
        {task.isCompleted === true && <img src="assets/icon-check.svg" alt="" />}
      </button>
      <p className='text-left'> {task.content}</p>
      </div>
     
      <button onClick={handleDelete} className="btn btn-circle btn-sm hover:bg-inherit transition-none hover:border-0 relative  ">
        <img src="assets/icon-cross.svg" alt="" />
      </button>
    </div>
  )
}

export default Task