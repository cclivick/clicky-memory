import React, { Component } from "react";
import ScoreCard from "./components/ScoreCard/ScoreCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Wrapper from "./components/Wrapper/Wrapper";
import planets from "./planets.json";
import Planet from "./components/Planet/Planet";

const mainStyle = {
  "backgroundColor": "black",
  "padding" : "40px"
}

class App extends Component {
  state = {
    planets,
    score: 0,
    highScore: 0
  }

  increment = id => {
    const planet = this.state.planets.find(planet => planet.id === id);
     if(planet.clicked === false) {
      planet.clicked = !planet.clicked
      this.setState({ score : this.state.score + 1}, function() {
        console.log(this.state.score);
      }) 
     } else {
       this.endGame();
     }
    this.state.planets.sort(() => Math.random() - 0.5);

  }

  endGame = () => {
    const currScore = this.state.score;
    const currHighScore = this.state.highScore;
    if( currScore > currHighScore ) {
      this.setState({ highScore : currScore });
    }
    this.setState({ score : 0 });
    alert("Game Over!")
  }

  render() {
    return (
      <div>
        <ScoreCard score={this.state.score} highScore={this.state.highScore}/>
        <Header />
        <div className="main" style={mainStyle}>
          <Wrapper>
            <div className="row">
            {this.state.planets.map(planet => (
              <div className="col-md-3">
                <Planet
                  key = {planet.id}
                  id = {planet.id}
                  clicked = {planet.clicked}
                  onClick = {() => this.increment(planet.id)}
                />
              </div>
            ))}
            </div>
          </Wrapper>
        </div>
        <Footer />
      </div>
    )
  }

}

export default App;