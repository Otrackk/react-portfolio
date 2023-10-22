import React from "react";
import Footer from "../Footer";
import Bio from '../Bio';
import IconsSkills from "../IconsSkills";
import Transition from "../Transition";

const About = () => {
    return (
        <div id="main-container" className="container-fluid bg-dark p-5 pt-0">
            
            <Bio />

            <IconsSkills />

            <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

            <Footer />
        </div>
    )
}

export default Transition(About);