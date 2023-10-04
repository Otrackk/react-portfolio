import React, { useState } from "react";

const SkillNaming = () => {

    const [skill, setSkill] = useState('Front End Developer');

    function setSkillName() {
        
        setInterval(function () {
            var skills = ["Front End Developer", "Penetration Tester", "Chess Master😉", "UI Designer"];
            var counter = Math.round(Math.random()*3);
            setSkill(skills[counter]);
        }, 3000)
    }

    setSkillName();

    return (
        <div className="d-flex justify-content-center mb-4">
           <h4 id="i-am" className="display-5 i-am-animation text-light i-am-size">{skill}</h4>
        </div>
    )

}

export default SkillNaming;