import React from "react";
import Navbar from "../Navbar";
import CardContainer from '../CardContainer';
import Footer from '../Footer';
import { motion } from 'framer-motion';


function Home() {

    return (


        <div id="main-container" className="container-fluid bg-dark p-5 pt-2">
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}>

                <CardContainer />
                </motion.div >


                <Footer />
            
        </div>

    );

}

export default Home;