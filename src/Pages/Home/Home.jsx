import React from "react";
import ThemeSwap from "../../Components/Buttons/ThemeSwap";
import NewTask from "../../Components/Tasks/NewTask";

function Home() {
  return (
    <div className="h-screen  font-Josefin flex flex-col items-center">
      <div className="w-full -z-10 h-1/3 absolute bg-desktop-dark bg-auto"></div>

      <div className="flex flex-col justify-center h-full w-full px-5 gap-10">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-4xl text-white">TO DO</h1>
         <ThemeSwap />
        </div>
        <NewTask />
        <container className="w-full rounded-lg bg-base-200">
        <div className="w-full h-16 px-5 flex justify-between text-secondary  items-center">
            <p>5 items left</p>
            <p>Clear Completed</p>
          </div>
          <div className="w-full h-16 px-5 flex justify-between text-secondary  items-center">
            <p>5 items left</p>
            <p>Clear Completed</p>
          </div>
        </container>
      </div>
    </div>
  );
}

export default Home;
