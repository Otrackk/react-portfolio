import React from "react";
import {  Routes, Route, useLocation } from "react-router-dom";
import './style/style.css';
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

function App() {

  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode='wait'>

        <Routes location={location} key={location.pathname}>

          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>

      </AnimatePresence>

    </>


  );
}

export default App;
