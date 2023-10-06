import React from "react";
import Navbar from "../Navbar";
import CardContainer from '../CardContainer';
import Footer from '../Footer';
import Transition from "../Transition";


function Home() {

    return (


        <div id="main-container" className="container-fluid bg-dark p-5 pt-2">
            
            <CardContainer />
            <Footer />

        </div>

    );

}

export default Transition(Home);