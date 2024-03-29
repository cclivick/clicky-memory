import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="background">
            <div className="container titleCont">
                    <h2 className="title">Planet Memory Game!</h2>
                    <h4 className="instructions">Click a planet to earn a point, but only once. Click it again and you lose the game!</h4>
            </div>
        </div>

    )
}

export default Header;