import React from "react";
import HTML from './assets/html.svg';
import CSS from './assets/css.svg';
import JS from './assets/js.svg';
import JQ from './assets/jquery.svg';
import Bootstrap from './assets/bootstrap.svg';

const SingleProject = () => {
    return (
        <>
            <section className='section-container d-none d-md-block'>

                <div className="text-light section-child">

                    <div className="div-child row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative radius-perso mt-2">

                        <div className="col-12 p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-light-emphasis">Games</strong>
                            <h3 className="mb-0">&lt;Dino-run&gt;</h3>

                            <div className="m-4 text-body-light d-flex flex-wrap justify-content-center">

                                <span className="myskill1 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className="mx-1" width="24" height="24" src={HTML} alt=""></img>HTML5
                                </span>

                                <span className="myskill2 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={CSS} alt=""></img>CSS3
                                </span>

                                <span className="myskill3 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={JS} alt=""></img>JavaScript
                                </span>

                            </div>

                            <p className="mb-auto">This project is obviously inspirated by the 'Chrome Dino' one, but i decided to twist it a little bit, adding some futures and making it more "user-friendly".
                                <br /> <br />
                                The whole project was programmed with just HTML, CSS & JavaScript Vanilla to test my skills without using any libraries.<br />
                            </p>
                            <a href="https://matteomontenero.github.io/dino-game/" target="_blank" rel="noreferrer" className="icon-link gap-1 icon-link-hover text-dark fw-semibold">
                                <button className="perso mt-2 fw-semibold">
                                    Live Demo
                                </button>
                            </a>
                        </div>

                    </div>

                </div>

                <div className="text-light section-child">

                    <div className="div-child row  g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative radius-perso mt-2">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-light-emphasis">API</strong>
                            <h3 className="mb-0">&lt;Placeholder-Generator&gt;</h3>
                            <div className="m-4 text-body-light d-flex justify-content-center">

                                <span className="myskill1 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className="mx-1" width="24" height="24" src={HTML} alt=""></img>HTML5
                                </span>

                                <span className="myskill2 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={CSS} alt=""></img>CSS3
                                </span>

                                <span className="myskill3 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={JQ} alt=""></img>JQuery
                                </span>

                                <span className="myskill3 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={Bootstrap} alt=""></img>Bootstrap
                                </span>

                            </div>
                            <p className="mb-auto">This project was initially created with the main goal of testing Bootstrap & API fetching on a very minimal single-page application.
                                <br /><br />
                                This is one of the projects i want to keep updated, maybe it will turn into something else, who knows.
                            </p>
                            <a href="https://matteomontenero.github.io/placeholder-generator/index.html" target="_blank" rel="noreferrer" className="icon-link gap-1 icon-link-hover text-dark fw-semibold">
                                <button className="perso mt-2 fw-semibold">
                                    Live Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-light section-child">

                    <div className="div-child row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative radius-perso mt-2">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-light-emphasis">Commission</strong>
                            <h3 className="mb-0">&lt;a-elle&gt;</h3>

                            <div className="m-4 text-body-light d-flex justify-content-center">

                                <span className="myskill1 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className="mx-1" width="24" height="24" src={HTML} alt=""></img>HTML5
                                </span>

                                <span className="myskill2 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={CSS} alt=""></img>CSS3
                                </span>

                                <span className="myskill3 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={JS} alt=""></img>JavaScript
                                </span>

                                <span className="myskill3 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={Bootstrap} alt=""></img>Bootstrap
                                </span>

                            </div>
                            <p className="mb-auto">This was actually one of my firsts freelance commission, the client just asked me for a simple but intuitive website for his company.
                                <br /><br />
                                I approached this projects with a very open mind, not being an expert of the sector my client worked in, so i started with a lot of research on competitors and then i moved to the coding. It was fun! </p>
                            <a href="https://otrackk.github.io/aelle-commission/" target="_blank" rel="noreferrer" className="icon-link gap-1 icon-link-hover text-dark fw-semibold">
                                <button className="perso mt-2 fw-semibold">
                                    Live Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </section >

            <section className="d-sm-block d-md-none section-container">
                
                <div className="text-light section-child">

                    <div className="div-child row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative radius-perso mt-2">

                        <div className="col-12 p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-light-emphasis">Games</strong>
                            <h3 className="mb-0">&lt;Dino-run&gt;</h3>

                            <div className="m-4 text-body-light d-flex flex-wrap justify-content-center">

                                <span className="myskill1 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className="mx-1" width="24" height="24" src={HTML} alt=""></img>HTML5
                                </span>

                                <span className="myskill2 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={CSS} alt=""></img>CSS3
                                </span>

                                <span className="myskill3 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={JS} alt=""></img>JavaScript
                                </span>

                            </div>

                            <p className="mb-auto">This project is obviously inspirated by the 'Chrome Dino' one, but i decided to twist it a little bit, adding some futures and making it more "user-friendly".
                                <br /> <br />
                                The whole project was programmed with just HTML, CSS & JavaScript Vanilla to test my skills without using any libraries.<br />
                            </p>
                            <a href="https://otrackk.github.io/dino-game/" target="_blank" rel="noreferrer" className="icon-link gap-1 icon-link-hover text-dark fw-semibold">
                                <button className="perso mt-2 fw-semibold">
                                    Live Demo
                                </button>
                            </a>
                        </div>

                    </div>

                </div>

                <div className="text-light section-child">

                    <div className="div-child row  g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative radius-perso mt-2">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-light-emphasis">API</strong>
                            <h3 className="mb-0">&lt;Placeholder-Generator&gt;</h3>
                            <div className="m-4 text-body-light d-flex flex-wrap justify-content-center">

                                <span className="myskill1 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className="mx-1" width="24" height="24" src={HTML} alt=""></img>HTML5
                                </span>

                                <span className="myskill2 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={CSS} alt=""></img>CSS3
                                </span>

                                <span className="myskill3 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={JQ} alt=""></img>JQuery
                                </span>

                                <span className="myskill3 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={Bootstrap} alt=""></img>Bootstrap
                                </span>

                            </div>
                            <p className="mb-auto">This project was initially created with the main goal of testing Bootstrap & API fetching on a very minimal single-page application.
                                <br /><br />
                                This is one of the projects i want to keep updated, maybe it will turn into something else, who knows.
                            </p>
                            <a href="https://otrackk.github.io/placeholder-generator/" target="_blank" rel="noreferrer" className="icon-link gap-1 icon-link-hover text-dark fw-semibold">
                                <button className="perso mt-2 fw-semibold">
                                    Live Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-light section-child">

                    <div className="div-child row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative radius-perso mt-2">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-light-emphasis">Commission</strong>
                            <h3 className="mb-0">&lt;a-elle&gt;</h3>

                            <div className="m-4 text-body-light d-flex flex-wrap justify-content-center">

                                <span className="myskill1 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className="mx-1" width="24" height="24" src={HTML} alt=""></img>HTML5
                                </span>

                                <span className="myskill2 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={CSS} alt=""></img>CSS3
                                </span>

                                <span className="myskill3 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={JS} alt=""></img>JavaScript
                                </span>

                                <span className="myskill3 mx-2 badge my-1 d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                                    <img className=" mx-1" width="24" height="24" src={Bootstrap} alt=""></img>Bootstrap
                                </span>

                            </div>
                            <p className="mb-auto">This was actually my very first freelance commission, the client just asked me for a simple but intuitive website for his company.
                                <br /><br />
                                I approached this projects with a very open mind, not being an expert of the sector my client worked in, so i started with a lot of research on competitors and then i moved to the coding. It was fun! </p>
                            <a href="https://otrackk.github.io/aelle-commission/" target="_blank" rel="noreferrer" className="icon-link gap-1 icon-link-hover text-dark fw-semibold">
                                <button className="perso mt-2 fw-semibold">
                                    Live Demo
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProject;