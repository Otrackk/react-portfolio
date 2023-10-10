import React from "react";

const SkillCard = () => {
    return (

        <div id="card-container" className="col-lg-10 code-editor container-fluid bg-dark border p-2 row mb-4  fade-in-card">

            <div id="about-me-card" className="col-md-6 border-end">

                <div className="header">
                    <span className="title">ABOUT ME</span>
                </div>

                <div className="editor-content">
                    <code className="code" style={{ fontSize: '20px' }}>
                        <p><span className="color-0">.about-me </span> <span> &#123; </span> </p>

                        <p className="property">
                            <span className="color-2">full-name</span><span>:</span>
                            <span className="color-1">Matteo Montenero</span>;
                        </p>

                        <p className="property">
                            <span className="color-2">age</span><span>:</span>
                            <span className="color-1">25yo</span>;
                        </p>

                        <p className="property">
                            <span className="color-2">where-do-i-live</span><span>:</span>
                            <span className="">Rome,Italy</span>;
                        </p>

                        <p className="property">
                            <span className="color-2">my-email</span><span>:</span>
                            <span className="color-3">matteomontenero15@gmail.com;</span>
                        </p>

                        <span>&#125;</span>

                    </code>

                </div>

            </div>

            <div className="col-md-6">

                <div className="header">
                    <span className="title">MY SKILLS</span>
                </div>

                <div className="editor-content">
                    <code className="code" style={{ fontSize: '20px' }}>
                        <p><span className="color-0">var </span><span className="color-2">HTML5 =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                        <p><span className="color-0">var </span><span className="color-2">CSS3 =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                        <p><span className="color-0">var </span><span className="color-2">Sass =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                        <p><span className="color-0">var </span><span className="color-2">javascript =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                        <p><span className="color-0">var </span><span className="color-2">typescript =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                        <p><span className="color-0">var </span><span className="color-2">nodeJS =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                        <p><span className="color-0">var </span><span className="color-2">Jquery =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                        <p><span className="color-0">var </span><span className="color-2">bootstrap =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                        <p><span className="color-0">var </span><span className="color-2">ReactJs =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                        <p><span className="color-0">var </span><span className="color-2">VueJS =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                        <p><span className="color-0">var </span><span className="color-2">pineScript =</span><span className="color-0"> true</span><span className="color-4">;</span></p>
                    </code>
                </div>

            </div>

        </div>
    )
}

export default SkillCard;
