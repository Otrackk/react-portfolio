import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import './style/style.css';
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function App() {
  return (

    <BrowserRouter>
      <AnimatePresence>
        <Routes>

          <Route index exact path="/react-portfolio" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route index exact path="/projects" element={<Projects />}></Route>

        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
