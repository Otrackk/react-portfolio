import React, { useState, useCallback, useEffect } from "react";

const skillsName = ["Front End Developer", "UI Designer", "Penetration Tester", "Chess Master😉"];

const SkillNaming = ()=> {
    const [skill, setNewSkill] = useState("Front End Developer");

    const shuffle = useCallback(() => {
        const index = Math.round(Math.random() * 3);
        setNewSkill(skillsName[index]);
    }, []);

    useEffect(() => {
        const intervalid = setInterval(shuffle, 3000);
        return () => clearInterval(intervalid);
    }, [shuffle])

    return <div className="d-flex justify-content-center mb-4">
        <h4 className="d-none d-md-block display-5 text-center i-am-animation text-light i-am-size">I am a&nbsp;</h4><span id="i-am" className="text-light display-5">{skill}</span>
    </div>

}


export default SkillNaming;