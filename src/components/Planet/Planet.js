import React from "react";
import "./style.css"

function Planet(props) {
    return (
        <button className="planetCard" id={props.id} onClick={props.onClick} data-id={props.clicked}></button>
    )
}

export default Planet;