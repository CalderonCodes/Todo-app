import React from 'react'

function Task({task}) {

  

  return (
    <div className="w-full h-16 bg-base-200 flex justify-between  text-primary px-5 items-center border-b border-secondary">
      <div className='flex gap-5'>
      <button className="btn btn-circle btn-xs   hover:bg-inherit hover:border-2  transition-none btn-outline"></button>
      <p className='text-left'> {task.content}</p>
      </div>
     
      <button className="btn btn-circle btn-sm hover:bg-inherit transition-none hover:border-0 relative  ">
        <img src="/public/assets/icon-cross.svg" alt="" />
      </button>
    </div>
  )
}

export default Task