import React from 'react'

import useStore from "../../taskStore";
function Task({task}) {

  
  const { tasks, addTask, removeTask } = useStore();

  const handleDelete = () => {
    removeTask(task.id)
  };
  

  return (
    <div className="w-full rounded-t-lg h-16 bg-base-200 flex justify-between  text-primary px-5 items-center border-b border-secondary">
      <div className='flex gap-5'>
      <button className="btn btn-circle btn-xs   hover:bg-inherit hover:border-2  transition-none btn-outline"></button>
      <p className='text-left'> {task.content}</p>
      </div>
     
      <button onClick={handleDelete} className="btn btn-circle btn-sm hover:bg-inherit transition-none hover:border-0 relative  ">
        <img src="assets/icon-cross.svg" alt="" />
      </button>
    </div>
  )
}

export default Task