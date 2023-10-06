import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './style/style.css';
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";

function App() {
  return (

    
      <BrowserRouter>
        <AnimatePresence>
          <Routes>

            <Route index path="/react-portfolio" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>

          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    
  );
}

export default App;
