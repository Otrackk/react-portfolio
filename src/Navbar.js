import React from 'react';
import { useState } from 'react';
import CurriculumPic from './assets/curriculum-pic.jpg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [classname, setClass] = useState('fade-in-nav');

    return (

        <nav onLoad={()=>{setTimeout(()=>{setClass('')},2000)}} id="navigation-bar" style={{ paddingBottom: "0px !important" }} className={classname + " navbar navbar-expand-sm navbar-dark bg-dark"}>
            <div className="container-fluid px-5">

                <div className="collapse navbar-collapse d-flex justify-content-around" id="navbar-hap">

                    <ul id="un-li-font" className="navbar-nav mb-2 mb-sm-0 d-flex justify-content-start align-items-center">

                        {/* <!-- FIRST NAV ITEM --> */}

                        <li className="nav-item">
                            <NavLink to='/'>       <button className="text-decoration-none nav-link point">
                                <p className="hover-eff m-0 p-0 display-2">Home</p>
                            </button></NavLink>
                        </li>

                        {/* <!-- SECOND NAV ITEM --> */}

                        <li className="nav-item">
                            <NavLink to='/about'>     <button className="text-decoration-none nav-link point">
                                <p className="hover-eff m-0 p-0 display-2">About</p>
                            </button></NavLink>
                        </li>

                        {/* <!-- THIRD NAV ITEM --> */}

                        <li className="nav-item">
                            <Link to='/projects'> <button className="text-decoration-none nav-link point">
                                <p className="hover-eff m-0 p-0 display-2">Projects</p>
                            </button></Link>
                        </li>

                    </ul>

                    {/* <!-- PROFILE PIC --> */}

                    <div className="d-flex justify-content-end d-none d-md-block">
                        <img id="curriculum-pic" src={CurriculumPic} alt=""></img>
                    </div>


                </div>
            </div>
        </nav>
    )
}

export default Navbar;