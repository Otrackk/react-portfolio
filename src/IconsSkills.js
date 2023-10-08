import React from "react";
import HTML from './assets/html.svg';
import CSS from './assets/css.svg';
import JS from './assets/js.svg';
import Sass from './assets/sass.svg';
import TS from './assets/type.svg';
import NODE from './assets/node.svg';
import JQ from './assets/jquery.svg';
import Bootstrap from './assets/bootstrap.svg';
import REACT from './assets/react.svg';
import Angular from './assets/angular.svg';
import Pine from './assets/pine.svg';

const IconsSkills = () => {
    return (
        <div className="d-flex flex-wrap gap-2 justify-content-center p-2 pt-0 mb-5">
           
            <span className="myskill1 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={HTML} alt=""></img>HTML5
            </span>

            <span className="myskill2 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={CSS} alt=""></img>CSS3
            </span>

            <span className="myskill3 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={Sass} alt=""></img>SASS
            </span>

            <span className="myskill4 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={JS} alt=""></img>JAVASCRIPT
            </span>

            <span className="myskill5 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={TS} alt=""></img>TYPESCRIPT
            </span>

            <span className="myskill6 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={NODE} alt=""></img>NODEJS
            </span>

            <span className="myskill7 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={JQ} alt=""></img>JQUERY
            </span>

            <span className="myskill8 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={Bootstrap} alt=""></img>BOOTSTRAP
            </span>

            <span className="myskill9 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={REACT} alt=""></img>REACT
            </span>

            <span className="myskill10 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={Angular} alt=""></img>ANGULAR
            </span>

            <span className="myskill11 badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill">
                <img className="mx-1" width="24" height="24" src={Pine} alt=""></img>PINESCRIPT
            </span>

        </div>
    )
}

export default IconsSkills;