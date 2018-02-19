import React, { Component } from 'react';
import './CSS/App.css'
import Menus from './Menus/Menus'
import ActionMessage from './Utilities/ActionMessage'
import HealthBar from './Utilities/HealthBar'
import playerImg from '../srcImages/player.png'
import opponentImg from '../srcImages/covalence.png'
import ProfessorImg from '../srcImages/professor_sprite.png'
import Audio from './Music/Audio'

export default class Battle extends Component {
  constructor(props) {
    super(props);
    this.handleOpponentTurn.bind(this)
    this.handleVictory.bind(this)
    this.checkPlayerHealth.bind(this)


    this.state = {
      music: "battle",
      playerIntro: "playerSlide",
      opponentIntro: "opponentSlide",
      turn: "player",
      isAttackPhase: false,
      actionMessage: "",
      opponentTakeDmg: false,
      playerTakeDmg: false,
      credits: false,
      player: {
        name: "Aderhold",
        baseHP: 100,
        currentHP: 100,
        healthBar: 33.5,
        lowHealth: false,
        moves: {
          1: {
            name: "Bootstrap",
            str: 30,
            type: "CSS",
            accuracy: 90,
            basePP: 10,
            currentPP: 10
          },
          2: {
            name: "ReactJS",
            str: 80,
            type: "JSX",
            accuracy: 60,
            basePP: 5,
            currentPP: 5
          },
          3: {
            name: "NodeJS",
            str: 50,
            type: "Server",
            accuracy: 70,
            basePP: 15,
            currentPP: 15
          },
          4: {
            name: "MySQL",
            str: 30,
            type: "Database",
            accuracy: 60,
            basePP: 20,
            currentPP: 20
          }
        }
      },
      opponent: {
        name: "Covalence",
        type: "bootcamp",
        baseHP: 1000,
        currentHP: 1000,
        healthBar: 33.5,
        isDefeated: false,
        moves: {
          1: {
            name: "[object Object]",
            str: 3,
            type: "WTF",
            accuracy: 60,
            basePP: 10,
            currentPP: 10
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

  componentDidMount() {
    this.setState({ isAttackPhase: true, actionMessage: `${this.state.opponent.name} wants to battle!` })
    setTimeout(this.setState.bind(this), 2500, { playerIntro: "playerSprite" });
    setTimeout(this.setState.bind(this), 4500, { opponentIntro: "opponentSprite", isAttackPhase: false, actionMessage: "" })

  }


  handleAttack(move) {
    let player = this.state.player
    let opponent = this.state.opponent
    let playerMsg = `${player.name} USED ${player.moves[move].name}!`
    let outOfPP = `YOU DO NOT HAVE ENOUGH PP FOR THAT MOVE.`
    let playerAttack = player.moves[move]
    let newAttackPP = this.state.player.moves[move].currentPP - 1
    let newOpponentHP;
    opponent.currentHP > player.moves[move].str ? newOpponentHP = opponent.currentHP - player.moves[move].str : newOpponentHP = opponent.currentHP - opponent.currentHP
    if (player.moves[move].currentPP === 0) {
      this.setState({ isAttackPhase: true, actionMessage: outOfPP });
      setTimeout(this.setState.bind(this), 3250, {
        turn: "player",
        isAttackPhase: false,
        actionMessage: ""
      })
    } else {
      this.setNestedState(playerAttack, 'currentPP', newAttackPP)
      this.setState({ isAttackPhase: true, actionMessage: playerMsg });
      setTimeout(this.setState.bind(this), 1250, { opponentTakeDmg: true })
      setTimeout(this.setState.bind(this), 1550, { opponentTakeDmg: false })
      setTimeout(this.setNestedState.bind(this), 2100, opponent, "currentHP", newOpponentHP)
      setTimeout(this.setNestedState.bind(this), 2100, opponent, "healthBar", this.handleHealthDecrease(newOpponentHP, opponent.baseHP))
      setTimeout(this.checkOpponentHealth.bind(this), 2550)
    }
  }

  handleHealthDecrease(hp, max) {
    let baseWidth = 33.5;
    let decimalPercentDecrease = hp / max;
    let newWidth = decimalPercentDecrease * baseWidth;
    return newWidth

  }

  checkPlayerHealth() {
    let player = this.state.player;

    player.currentHP < 2 ?
      this.herosNeverDie()
      :
      this.setState({ turn: "player", isAttackPhase: false, actionMessage: "" })
  }

  checkOpponentHealth() {
    console.log('cOH')
    if (this.state.opponent.currentHP < 1) {
      this.handleVictory()
    } else {
      this.handleOpponentTurn()
    }
  }

  handleOpponentTurn() {
    let opponent = this.state.opponent;
    let player = this.state.player;
    let opponentMove = Math.floor(Math.random() * 4) + 1
    let opponentMsg = `${opponent.name} USED ${opponent.moves[opponentMove].name}!`
    let newPlayerHP;

    player.currentHP > opponent.moves[opponentMove].str ? newPlayerHP = player.currentHP - opponent.moves[opponentMove].str : newPlayerHP = player.currentHP - player.currentHP + 1

    this.setState({ turn: "opponent" })
    setTimeout(this.setState.bind(this), 1150, { actionMessage: opponentMsg });
    setTimeout(this.setState.bind(this), 2300, { playerTakeDmg: true })
    setTimeout(this.setState.bind(this), 2600, { playerTakeDmg: false })
    setTimeout(this.setNestedState.bind(this), 3150, player, "currentHP", newPlayerHP)
    setTimeout(this.setNestedState.bind(this), 3150, player, "healthBar", this.handleHealthDecrease(newPlayerHP, player.baseHP))
    setTimeout(() => this.checkPlayerHealth(), 3600)
  }

  handleVictory() {

    setTimeout(() => {
      this.setState({ actionMessage: `${this.state.opponent.name} FAINTED.` });
      this.setNestedState(this.state, "music", "victory");
    }, 1000);
    setTimeout(() => {
      this.setNestedState(this.state.opponent, "isDefeated", true);
      this.forceUpdate();
    }, 3000)
    setTimeout(() => this.setState({ actionMessage: `${this.state.player.name} DEFEATED ${this.state.opponent.name}.` }), 8000);
    setTimeout(() => this.setState({ actionMessage: `${this.state.player.name} LOSES $1,225,463.` }), 12000);
    setTimeout(() => this.setState({ actionMessage: "Professor Stapleton: HI!" }), 17000);
    setTimeout(() => this.setState({ actionMessage: `Professor Stapleton: CONGRATULATIONS ${this.state.player.name} ON DEFEATING ${this.state.opponent.name}!` }), 22000);
    setTimeout(() => this.setState({ actionMessage: "Professor Stapleton: YOU ARE WELL ON YOUR WAY TO YOUR NEW FULL-STACK CAREER." }), 27000);
    setTimeout(() => this.setState({ actionMessage: "Professor Stapleton: SEE YOU SOON!" }), 32000);
    setTimeout(() => this.setState({ actionMessage: `${this.state.player.name} RECEIVED Covalence Full-Stack Certificate of Completion.` }), 37000);
    setTimeout(() => this.setState({ credits: true }), 42000);
    setTimeout(() => this.props.handleCredits(), 47000)
  }

  herosNeverDie() {
    let attack = this.state.player.moves
    this.setState({ actionMessage: `${this.state.player.name} used DETERMINATION!` });
    setTimeout(() => {
      this.setNestedState(this.state.player, "currentHP", 100)
      this.setNestedState(this.state.player, "healthBar", 33.5)
      this.setNestedState(attack[1], "currentPP", attack[1].basePP)
      this.setNestedState(attack[2], "currentPP", attack[2].basePP)
      this.setNestedState(attack[3], "currentPP", attack[3].basePP)
      this.setNestedState(attack[4], "currentPP", attack[4].basePP)
    }, 2000);
    setTimeout(() => this.setState({ actionMessage: `${this.state.player.name}'s health and PP are restored to max!` }), 3000)
    setTimeout(() => this.setState({ turn: "player", isAttackPhase: false, actionMessage: "" }), 6500)
  }

  setNestedState(obj, prop, value) {
    Object.defineProperty(obj, prop, { value: value });
  }

  render() {
    let opponent = this.state.opponent
    let player = this.state.player
    let playerDmgFx;
    let opponentDmgFx;
    let none;
    let defeatAnimation;
    let creditsRoll;
    this.state.opponentIntro === "opponentSprite" ? none = "none" : none = "null";
    opponent.isDefeated ? defeatAnimation = "fade-out" : defeatAnimation = "null";
    this.state.credits ? creditsRoll = "fade-out-slow" : creditsRoll = "null";

    // This ternary does the EXACT same actions at the if-else_if-else function below it, BUT...
    // this ternary kicks and linter warning from ESLint stating:
    // "Expected an assignment or function call and instead saw an expression"
    // "To ignore, add // eslint-disable-next-line to the line before." <-- This solves that issue...

    // eslint-disable-next-line
    this.state.playerTakeDmg ? playerDmgFx = "dmgFx" : this.state.opponentTakeDmg ? opponentDmgFx = "dmgFx" : () => { playerDmgFx; opponentDmgFx; };

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
        <div className={`${creditsRoll}`}>
          {this.state.opponentIntro === "opponentSprite" && <div className="opponent-box">
            {playerDmgFx === "dmgFx" && <Audio type={"damage"} />}
            {opponentDmgFx === "dmgFx" && <Audio type={"damage"} />}
            <span className="opponent-name">
              {opponent.name}
            </span>

            <HealthBar width={opponent.healthBar} />

            <span className="opponent-health">
              HP:{opponent.currentHP}/{opponent.baseHP}
            </span>

          </div>}

          <img className={`opponent-sprite ${this.state.opponentIntro} ${opponentDmgFx} ${defeatAnimation}`} src={opponentImg} alt="opponent" />
          {opponent.isDefeated && <img className={`professor-sprite professor-intro`} src={ProfessorImg} alt="professor" />}
          {this.state.music === "battle" && <Audio type={"battle"} loop={true} />}
          {this.state.music === "victory" && <Audio type={"victory"} loop={true} />}
          {this.state.playerIntro === "playerSprite" && <div className="player-box">

            <span className="player-name">
              {player.name}
            </span>

            <HealthBar width={player.healthBar} />

            <span className="player-health">
              HP:{player.currentHP}/{player.baseHP}
            </span>

          </div>}

          <img className={`player-sprite ${this.state.playerIntro} ${playerDmgFx}`} src={playerImg} alt="player" />
          <div className="selections-box" />

          {this.state.opponentIntro === "opponentSprite" && <Menus handleAttack={this.handleAttack.bind(this)} attack={this.state} />}

          {this.state.isAttackPhase && <ActionMessage msg={this.state.actionMessage} />}
          {this.state.turn === "opponent" && <div id="disable" />}


          <div className={`intro ${none}`}></div>

        </div>

      </div>
    );
  }
}