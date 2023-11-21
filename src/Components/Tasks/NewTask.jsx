import React from "react";

function NewTask() {
  return (
    <div className="w-full h-16 rounded-lg  bg-base-200 flex justify-center text-primary px-5 items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <button className="btn btn-circle btn-xs  btn-outline"></button>
      <input
        type="text"
        placeholder="Create new todo..."
        className="input input-ghost w-full focus:bg-inherit placeholder:text-secondary max-w-xs"
      />
    </div>
  );
}

export default NewTask;
