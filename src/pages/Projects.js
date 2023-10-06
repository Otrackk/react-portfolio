import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProjectCard from "../ProjectCard";

const Projects = () => {
    return (
        <div id="main-container" className="container-fluid bg-dark p-5 pt-2">
            <Navbar />
            <ProjectCard />
            <Footer />
        </div>
    )
}

export default Projects;