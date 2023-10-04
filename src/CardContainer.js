import React from "react";
import SkillCard from "./SkillCard";
import SkillNaming from "./SkillNaming";

const CardContainer = () => {
    return (
        <div id="container-cards-mobile-tweak" className="container-fluid d-flex justify-content-center row p-5 py-0">
            <SkillCard />
            <SkillNaming />
        </div>
    )
}

export default CardContainer; 