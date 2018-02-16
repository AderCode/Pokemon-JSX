import React, { Component } from 'react';
import './CSS/App.css'
import Menus from './Menus/Menus'
import ActionMessage from './Utilities/ActionMessage'

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      turn: "player",
      isAttackPhase: false,
      actionMessage: "",
      opponentTakeDmg: false,
      playerTakeDmg: false,
      player: {
        name: "Aderhold",
        baseHP: 100,
        currentHP: 100,
        sprite: require('../srcImages/player.png'),
        moves: {
          1: {
            name: "Bootstrap",
            str: 30,
            type: "CSS",
            accuracy: 90,
            basePP: 10,
            currentPP: 8
          },
          2: {
            name: "ReactJS",
            str: 80,
            type: "JSX",
            accuracy: 60,
            basePP: 10,
            currentPP: 7
          },
          3: {
            name: "NodeJS",
            str: 50,
            type: "Server",
            accuracy: 70,
            basePP: 15,
            currentPP: 12
          },
          4: {
            name: "MySQL",
            str: 30,
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
        sprite: require('../srcImages/covalence.png'),
        moves: {
          1: {
            name: "[object Object]",
            str: 3,
            type: "WTF",
            accuracy: 60,
            basePP: 1,
            currentPP: 1
          },
          2: {
            name: "slowMath",
            str: 5,
            type: "OOP",
            accuracy: 50,
            basePP: 2,
            currentPP: 2
          },
          3: {
            name: "Construstor",
            str: 8,
            type: "SyntaxErr",
            accuracy: 75,
            basePP: 3,
            currentPP: 3
          },
          4: {
            name: "Advanced Section",
            str: 8,
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
    let opponentMove = Math.floor(Math.random() * 4) + 1
    let player = this.state.player
    let opponent = this.state.opponent
    let newOpponentHP;
    opponent.currentHP > player.moves[move].str ? newOpponentHP = opponent.currentHP - player.moves[move].str : newOpponentHP = opponent.currentHP - opponent.currentHP
    let newPlayerHP = player.currentHP - opponent.moves[move].str;
    player.currentHP > opponent.moves[move].str ? newPlayerHP = player.currentHP - opponent.moves[move].str : newPlayerHP = player.currentHP - player.currentHP
    let opponentMsg = `${opponent.name} used ${opponent.moves[opponentMove].name}!`
    let playerMsg = `${player.name} used ${player.moves[move].name}!`

    setTimeout(this.setState.bind(this), 150, { isAttackPhase: true, actionMessage: playerMsg });
    setTimeout(this.setState.bind(this), 2100, {
      opponent: {
        name: opponent.name,
        baseHP: opponent.baseHP,
        currentHP: newOpponentHP,
        sprite: opponent.sprite,
        moves: opponent.moves
      }
    })
    setTimeout(this.setState.bind(this), 1250, { opponentTakeDmg: true })
    setTimeout(this.setState.bind(this), 1550, { opponentTakeDmg: false })
    setTimeout(this.setState.bind(this), 2550, { turn: "opponent" })
    setTimeout(this.setState.bind(this), 2700, { actionMessage: opponentMsg });
    setTimeout(this.setState.bind(this), 4650, {
      player: {
        name: player.name,
        baseHP: player.baseHP,
        currentHP: newPlayerHP,
        sprite: player.sprite,
        moves: player.moves
      }
    })
    setTimeout(this.setState.bind(this), 3800, { playerTakeDmg: true })
    setTimeout(this.setState.bind(this), 4100, { playerTakeDmg: false })
    setTimeout(this.setState.bind(this), 5100, {  turn: "player", 
                                                  isAttackPhase: false,
                                                  actionMessage: ""})

    // setTimeout(() => {if (player.currentHP < 30) {
    //   this.setState({ msg: `${player.name} used DETERMINATION!!!` })
    //   setTimeout(() => {
    //       for (let i = player.currentHP; i < player.baseHP;) {
    //       let newPlayerHP = player.currentHP + 1
    //         this.setState({
    //           player: {
    //             name: player.name,
    //             baseHP: player.baseHP,
    //             currentHP: newPlayerHP,
    //             sprite: player.sprite,
    //             moves: player.moves
    //           }
    //         })
    //       }
    //     }
    //   , 2000)

    // } else {
    //   this.setState({ turn: "player", isAttackPhase: false })
    // }}, 5100)

  }




  render() {
    let opponent = this.state.opponent
    let player = this.state.player
    let playerDmgFx;
    let opponentDmgFx;

    // This ternary does the EXACT same actions at the if-else_if-else function below it, BUT...
    // this ternary kicks and linter warning from ESLint stating:
    // "Expected an assignment or function call and instead saw an expression"
    // "To ignore, add // eslint-disable-next-line to the line before." <-- This solves that issue...

    // eslint-disable-next-line
    this.state.playerTakeDmg ? playerDmgFx = "dmgFx" : this.state.opponentTakeDmg ? opponentDmgFx = "dmgFx" : () => {playerDmgFx; opponentDmgFx;};

    // // Same as the ternary above this, but this does not kick any linter warnings from ESLint...
    // if (this.state.playerTakeDmg) {
    //   playerDmgFx = "dmgFx"
    // } else if (this.state.opponentTakeDmg) {
    //   opponentDmgFx = "dmgFx"
    // } else {
    //   playerDmgFx = ""; 
    //   opponentDmgFx = "";
    // }



    return (
      <div className="main box">
        <div className="opponent-box">

          <span className="opponent-name">
          {opponent.name}
          </span>

          {/* Need to change color of health bar to grayscale... */}
          <span className="opponent-health-bar">
            {/* <progress id="opponent-health" value={opponent.currentHP} max={opponent.baseHP}></progress> */}
          </span>

          <span className="opponent-health">
            HP:{opponent.currentHP}/{opponent.baseHP}
          </span>

        </div>

        <img className={`opponent-sprite ${opponentDmgFx}`} src={this.state.opponent.sprite} alt="opponent" />

        <div className="player-box">

          <span className="player-name">
            {player.name}
          </span>

          {/* Need to change color of health bar to grayscale... */}
          <span className="player-health-bar">
            {/* <progress id="player-health" value={player.currentHP} max={player.baseHP}></progress> */}
          </span>

          <span className="player-health">
            HP:{player.currentHP}/{player.baseHP}
          </span>

        </div>

        <img className={`player-sprite ${playerDmgFx}`} src={`${this.state.player.sprite}`} alt="player" />

        <div className="selections-box">
        </div>

        <Menus handleAttack={this.handleAttack.bind(this)} attack={this.state} />
        {this.state.isAttackPhase && <ActionMessage msg={this.state.actionMessage} />}
        {this.state.turn === "opponent" && <div id="disable" />}

        

      </div>
    );
  }
}

export default App;
