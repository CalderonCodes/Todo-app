import React from "react";

function NewTask() {
  return (
    <div className="w-full  rounded-lg  bg-base-200 flex justify-center text-primary lg:justify-start px-5 items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <button className="btn btn-circle btn-xs  btn-outline"></button>
      <input
        type="text"
        placeholder="Create new todo..."
        className="input lg:h-16 lg:text-lg input-ghost w-full text-accent focus:bg-inherit placeholder:text-accent font-semibold focus:outline-none focus:border-0 max-w-xs"
      />
    </div>
  );
}

export default NewTask;
