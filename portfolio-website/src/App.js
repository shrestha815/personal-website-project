import React from "react";
import Navbar from './components/navbar.js';
import Home from './components/Home';
import Portfolio from './components/Home';
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App(){
  return(
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Portfolio" element={<Portfolio/>} />
        <Route path="About" element={<About/>} />
        <Route path="Contact" element={<Contact/>} />
      </Routes>
    </React.Fragment>

  );
}

export default App;