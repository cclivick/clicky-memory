import React from "react";
import "./style.css"


function ScoreCard(props) {
    return (
        <div className="ScoreCard">
            <div className="row">
                <div className="col-md-4 navItem">
                    <h4>Clicky Game</h4>
                </div>
                <div className="col-md-4 navItem">
                    <h4>Press an image to start!</h4>
                </div>
                <div className="col-md-4 navItem">
                    <h4>Correct: {props.score} || High Score: {props.highScore}</h4>
                </div>
            </div>
        </div>
    )
}

export default ScoreCard;