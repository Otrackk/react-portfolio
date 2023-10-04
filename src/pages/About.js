import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ExperienceMap from "../ExperienceMap";
import Bio from '../Bio';
import IconsSkills from "../IconsSkills";

const About = () => {
    return (
        <div id="main-container" className="container-fluid bg-dark p-5 pt-2">
            <Navbar />

            <Bio />

            <IconsSkills />

            <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

            <ExperienceMap />

            <Footer />
        </div>
    )
}

export default About;