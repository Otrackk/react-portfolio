import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProjectCard from "../ProjectCard";
import transition from "../Transition";

const Projects = () => {
    return (
        <div id="main-container" className="container-fluid bg-dark p-5 pt-2">
           
            <ProjectCard />
            <Footer />
        </div>
    )
}

export default transition(Projects);