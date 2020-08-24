import React from "react";
import Button from "react-bootstrap/Button";
import "./StatusBar.css"


// component for statusbar
// creating a prop for this statusBar by adding a parameter to the function
// the props // to add more you use commas to seperate
function StatusBar ({status, onRestart}){
    return(
        <div className="status-bar">
        <p className="status">{status}</p>
        <Button variant="primary" className= "button" onClick={onRestart}>"Restart"</Button>
    </div>
    );
}

export default StatusBar;