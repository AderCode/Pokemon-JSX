import React, { Component } from 'react';
import './CSS/App.css'
import Menus from './Menus/Menus'
import AttackMsg from './AttackMsg'
class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      turn: "player",
      isAttacking: false,
      msg: "",
      oponnentDmg: "",
      playerDmg: "",
      player: {
        name: "Matthew Aderhold",
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
    let newOpponentHP = opponent.currentHP - player.moves[move].str;
    let newPlayerHP = player.currentHP - opponent.moves[move].str;
    let opponentMsg = `${opponent.name} used ${opponent.moves[opponentMove].name}!`
    let playerMsg = `${player.name} used ${player.moves[move].name}!`

    setTimeout(this.setState.bind(this), 150, { isAttacking: true, msg: playerMsg });
    setTimeout(this.setState.bind(this), 2100, {
      opponent: {
        name: opponent.name,
        baseHP: opponent.baseHP,
        currentHP: newOpponentHP,
        sprite: opponent.sprite,
        moves: opponent.moves
      }
    })
    setTimeout(this.setState.bind(this), 1250, { opponentDmg: "dmg" })
    setTimeout(this.setState.bind(this), 1550, { opponentDmg: "" })
    setTimeout(this.setState.bind(this), 2550, { turn: "opponent" })
    setTimeout(this.setState.bind(this), 2700, { msg: opponentMsg });
    setTimeout(this.setState.bind(this), 4650, {
      player: {
        name: player.name,
        baseHP: player.baseHP,
        currentHP: newPlayerHP,
        sprite: player.sprite,
        moves: player.moves
      }
    })
    setTimeout(this.setState.bind(this), 3800, { playerDmg: "dmg" })
    setTimeout(this.setState.bind(this), 4100, { playerDmg: "" })
    setTimeout(this.setState.bind(this), 5100, { turn: "player", isAttacking: false })

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
    //   this.setState({ turn: "player", isAttacking: false })
    // }}, 5100)

  }


  render() {
    let opponent = this.state.opponent
    let player = this.state.player
    let opponentDmgClass = this.state.opponentDmg
    let playerDmgClass = this.state.playerDmg
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

        <img className={`opponent-sprite ${opponentDmgClass}`} src={this.state.opponent.sprite} alt="opponent" />

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

        <img className={`player-sprite ${playerDmgClass}`} src={`${this.state.player.sprite}`} alt="player" />

        <div className="selections-box">
        </div>

        <Menus handleAttack={this.handleAttack.bind(this)} store={this.state} />
        {this.state.isAttacking && <AttackMsg msg={this.state.msg} />}
        {this.state.turn === "opponent" && <div id="disable" />}

      </div>
    );
  }
}

export default App;
