import React, { Component } from 'react';
import './CSS/App.css'
import Menus from './Menus/Menus'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      turn: "player",
      player: {
        name: "Matthew Aderhold",
        baseHP: 100,
        currentHP: 100,
        sprite: <img className="player-sprite" src={require('../srcImages/player.png')} alt="player" />,
        moves: {
          1: {
              name: "Bootstrap",
              str: 10,
              type: "CSS",
              accuracy: 60,
              basePP: 30,
              currentPP: 21
          },
          2: {
              name: "ReactJS",
              str: 20,
              type: "JSX",
              accuracy: 60,
              basePP: 25,
              currentPP:13
          },
          3: {
              name: "NodeJS",
              str: 30,
              type: "Server",
              accuracy: 60,
              basePP: 15,
              currentPP: 12
          },
          4: {
              name: "MySQL",
              str: 40,
              type: "Database",
              accuracy: 60,
              basePP: 20,
              currentPP: 17
          }
      }
      },
      opponent: {
        name: "Covalence",
        type: "bootcamp",
        baseHP: 1000,
        currentHP: 1000,
        sprite: <img className="opponent-sprite" src={require('../srcImages/covalence.png')} alt="opponent" />,
        moves: {
          1: {
              name: "Week 0",
              str: 50,
              type: "WTF",
              accuracy: 60,
              basePP: 1,
              currentPP: 1
          },
          2: {
              name: "Group Project",
              str: 20,
              type: "Agile",
              accuracy: 50,
              basePP: 2,
              currentPP:2
          },
          3: {
              name: "Boilerplate",
              str: 30,
              type: "Incomplete",
              accuracy: 75,
              basePP: 3,
              currentPP: 3
          },
          4: {
              name: "Advanced Section",
              str: 40,
              type: "Vague",
              accuracy: 80,
              basePP: 5,
              currentPP: 5
          }
      }
      }
    }

  }

  handleAttack(move) {
    let player = this.state.player
    let opponent = this.state.opponent
    let newHP = opponent.currentHP - player.moves[move].str;
    this.setState({
      opponent: {
        name: "Covalence",
        baseHP: 1000,
        currentHP: newHP,
        sprite: <img className="opponent-sprite" src={require('../srcImages/covalence.png')} alt="opponent" />
      }
    })
  }

  handleOpponentTurn() {
    if(this.state.turn === "opponent") {
      
    }
  }

  render() {
    let opponent = this.state.opponent
    let player = this.state.player
    return (
      <div className="main box">

        <div className="opponent-box">

          <span className="opponent-name">
            {opponent.name}
          </span>

          {/* Need to change color of health bar to grayscale... */}
          <span className="opponent-health-bar">
            <progress id="opponent-health" value={opponent.currentHP} max={opponent.baseHP}></progress>
          </span>

          <span className="opponent-health">
            HP:{opponent.currentHP}/{opponent.baseHP}
          </span>

        </div>

        {opponent.sprite}

        <div className="player-box">

          <span className="player-name">
            {player.name}
          </span>

          {/* Need to change color of health bar to grayscale... */}
          <span className="player-health-bar">
            <progress id="player-health" value={player.currentHP} max={player.baseHP}></progress>
          </span>

          <span className="player-health">
            HP:{player.currentHP}/{player.baseHP}
          </span>

        </div>

        {player.sprite}

        <div className="selections-box">
        </div>

        <Menus handleAttack={this.handleAttack.bind(this)} store = {this.state}/>

        {this.state.turn === "opponent" && <div id="disable" />}

      </div>
    );
  }
}

export default App;
