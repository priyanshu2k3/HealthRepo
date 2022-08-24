import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Refresh from "./components/Refresh";
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <div className="App" >
      <div className='container' style={{width: "60rem"}}>
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Form/>}/>
      <Route exact path="/display" element={<Refresh/>}/>
      </Routes></BrowserRouter>
    </div>
    </div>
  );
}

export default App;