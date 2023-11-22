import {useEffect, useState} from "react";
import ThemeSwap from "../../Components/Buttons/ThemeSwap";
import NewTask from "../../Components/Tasks/NewTask";
import Filters from "../../Components/Buttons/Filters";
import Task from "../../Components/Tasks/Task";
import DesktopFilters from "../../Components/Buttons/DesktopFilters";
import { v4 as uuidv4 } from 'uuid';

import useStore from "../../taskStore";

function Home() {

  
  const { tasks, addTask} = useStore();

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="h-screen  font-Josefin flex flex-col items-center">
      <div className="w-full -z-10 h-4/10 absolute bg-mobile-dark lg:bg-desktop-dark bg-cover"></div>

      <div className="flex flex-col py-16 items-center  h-full w-full lg:w-5/12 px-5 gap-5">
        
        <div className="w-full flex justify-between mb-5">
          
          <h1 className="font-bold text-4xl text-white tracking-[0.25em]">TO DO</h1>
         <ThemeSwap />
        </div>
        <NewTask />
        <div className="w-full  rounded-lg bg-base-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        {tasks.length === 0 && (<div className="w-full h-16 px-5 flex justify-center text-secondary border-b border-secondary items-center">
            <p className="text-xl ">No task left!</p>
          </div>)}
          
          {tasks.map((task) => (
            <Task key={uuidv4()} task={task} />
          )) }

          <div className="w-full h-16 px-5  flex justify-between text-secondary lg:text-sm  items-center">
            <p className="lg:w-1/3">{tasks.length} items left</p>
            <DesktopFilters />
            <p className="lg:w-1/3">Clear Completed</p>
          </div>
          
          
        </div>
        
        <Filters />
        <p className="text-secondary pb-8">Drag and drop to reorder list</p>
      </div>
      
    </div>
  );
}

export default Home;
