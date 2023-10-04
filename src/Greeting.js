import React from "react";

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    setInner() {

        var date = new Date();
        var today = date.getDay();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday" , "Thursday", "Friday", "Saturday"];

        var markUp = "\"Have a beautiful " + days[today] + "\"";

        return markUp;
    }


    render() {
        return (
            <div id="greeting-container" className="d-flex justify-content-center align-items-center p-3 mt-5 fade-in-greeting">
                <h1 id="today-greeting" className="text-light">{this.setInner()}</h1>
            </div>
        )
    }

}

export default Greeting;