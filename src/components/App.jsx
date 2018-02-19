import React, { Component, Fragment } from 'react';
import Battle from './Battle';
import GameStart from './GameStart';
import Credits from './Credits'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newGame: "start", //Change back to "start",
            continue: false
        }


    }

    handleNewGame() {
        this.setState({newGame: "inProgress"})
    }

    handleContinue() {
        this.setState({continue: true});
        setTimeout(this.setState.bind(this), 2500, {continue: false})
    }

    handleCredits() {
        this.setState({newGame: "credits"})
    }

    render() {
        return(
            <Fragment>
            {this.state.newGame === "start" && <GameStart handleNewGame = {() => this.handleNewGame()} handleContinue = {() => this.handleContinue()} continue={this.state.continue} />}
            {this.state.newGame === "inProgress" && <Battle handleCredits = {() => this.handleCredits()} />}
            {this.state.newGame === "credits" && <Credits />}
            </Fragment>
        )
    }

}