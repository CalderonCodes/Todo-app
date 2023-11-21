import React from "react";
import ThemeSwap from "../../Components/Buttons/ThemeSwap";
import NewTask from "../../Components/Tasks/NewTask";
import Filters from "../../Components/Buttons/Filters";
import Task from "../../Components/Tasks/Task";

function Home() {
  return (
    <div className="h-screen  font-Josefin flex flex-col items-center">
      <div className="w-full -z-10 h-4/10 absolute bg-desktop-dark bg-auto"></div>

      <div className="flex flex-col py-16 items-center  h-full w-full px-5 gap-10">
        
        <div className="w-full flex justify-between">
          
          <h1 className="font-bold text-4xl text-white">TO DO</h1>
         <ThemeSwap />
        </div>
        <NewTask />
        <container className="w-full  rounded-lg bg-base-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="w-full h-16 px-5 flex justify-center text-secondary border-b border-secondary items-center">
            <p className="text-xl ">No task left!</p>
          </div>
          
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <div className="w-full h-16 px-5 flex justify-between text-secondary  items-center">
            <p>5 items left</p>
            <p>Clear Completed</p>
          </div>
          
          
        </container>
        
        <Filters />
        <p className="text-secondary pb-16">Drag and drop to reorder list</p>
      </div>
      
    </div>
  );
}

export default Home;
