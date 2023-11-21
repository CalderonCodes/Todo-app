import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Home from "./Pages/Home/Home";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <Home />
      
    </>
  );
}

export default App;
