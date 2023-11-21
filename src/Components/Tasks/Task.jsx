import React from 'react'

function Task() {
  return (
    <div className="w-full h-16 rounded-lg  bg-base-200 flex justify-between  text-primary px-5 items-center border-b border-secondary">
      <div className='flex gap-5'>
      <button className="btn btn-circle btn-xs  btn-outline"></button>
      <p className='text-left'> Task 1</p>
      </div>
     
      <button className="btn btn-circle btn-sm hover:bg-inherit hover:border-0 relative  ">
        <img src="/public/assets/icon-cross.svg" alt="" />
      </button>
    </div>
  )
}

export default Task