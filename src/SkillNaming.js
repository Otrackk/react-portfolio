import React, { useState, useCallback, useEffect } from "react";

const skillsName = ["Front End Developer", "UI Designer", "Penetration Tester", "Chess Master😉"];

const SkillNaming = ()=> {
    const [skill, setNewSkill] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.round(Math.random() * skillsName.length);
        setNewSkill(skillsName[index]);
    }, []);

    useEffect(() => {
        const intervalid = setInterval(shuffle, 3000);
        return () => clearInterval(intervalid);
    }, [shuffle])

    return <div className="d-flex justify-content-center mb-4">
        <h4 className="display-5 i-am-animation text-light i-am-size">I am a <span id="i-am" className="text-light">{skill}</span></h4>
    </div>

}


export default SkillNaming;