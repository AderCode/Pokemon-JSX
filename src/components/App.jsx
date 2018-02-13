import React, { Component } from 'react';
import './CSS/App.css'
import Menus from './Menus/Menus'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: {
        name: "Matthew Aderhold",
        baseHealth: 100,
        currentHealth: 100,
        sprite: <img className="player-sprite" src={require('../srcImages/player.png')} alt="player" />
      },
      opponent: {
        name: "Covalence",
        baseHealth: 1000,
        currentHealth: 1000,
        sprite: <img className="opponent-sprite" src={require('../srcImages/covalence.png')} alt="opponent" />
      }
    }

  }

  handleAttack(hit) {
    let newHealth = this.state.opponent.currentHealth - hit;
    this.setState({ opponent: {name: "Covalence",
    baseHealth: 1000,
    currentHealth: newHealth,
    sprite: <img className="opponent-sprite" src={require('../srcImages/covalence.png')} alt="opponent" />} })
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
          <span className="opponent-health">
            {opponent.currentHealth}/{opponent.baseHealth}
          </span>
        </div>
        {opponent.sprite}
        <div className="player-box">
          <span className="player-name">
            {player.name}
          </span>
          <span className="player-health">
            {player.currentHealth}/{player.baseHealth}
          </span>
        </div>
        {player.sprite}
        <div className="selections-box"></div>
        <Menus attack = {this.handleAttack.bind(this)}/>
      </div>
    );
  }
}

export default App;
