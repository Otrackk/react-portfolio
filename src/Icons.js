import React from "react";
import GitIcon from './assets/github.svg';
import LinkedinIcon from './assets/link.svg';


const Icons = () => {
    return (
        <div id="icons-container" className="d-flex justify-content-center align-items-center fade-in-icons pb-2">

            <div className="nav-item" style={{padding:'5px'}}>
                <a className="text-decoration-none nav-link" href="https://github.com/matteoMontenero" target="_blank">
                    <img src={GitIcon} alt="Github" style={{ width: "54px" }}></img>
                </a>
            </div>

            <div className="nav-item">
                <a className="text-decoration-none nav-link" href="https://www.linkedin.com/in/matteo-montenero/" target="_blank">
                    <img src={LinkedinIcon} alt="LinkedIn"></img>
                </a>
            </div>
        </div>
    )
}

export default Icons;