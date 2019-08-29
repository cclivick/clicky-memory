import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;

//Wrapper holds PlanetCards, which need to be defined