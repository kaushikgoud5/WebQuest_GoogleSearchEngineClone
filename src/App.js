import { useState } from "react";
import React from "react"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Routing from "./components/Routing";

function App() {
  let [darkmode,setDarkMode]=useState(false);
  const toggleMode=()=>{
    if(darkmode){
      setDarkMode(darkmode=false);
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
    else{
      setDarkMode(darkmode=true);
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
    }
  }
  return (
    <div className="App">
        <Navbar darkmode={darkmode} toggleMode={toggleMode}/>
        <Search/>
        <Routing/>
        <Footer/>
    </div>
  );
}

export default App;
