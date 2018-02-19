import React, { Component, Fragment } from 'react';
import Battle from './Battle';
import GameStart from './GameStart';
import NoSave from './NoSave'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newGame: false,
            continue: false
        }


    }

    handleNewGame() {
        this.setState({newGame: true})
    }

    handleContinue() {
        this.setState({continue: true});
        setTimeout(this.setState.bind(this), 2500, {continue: false})
    }

    render() {
        return(
            <Fragment>
            {!this.state.newGame && <GameStart handleNewGame = {() => this.handleNewGame()} handleContinue = {() => this.handleContinue()} />}
            {this.state.newGame && <Battle />}
            {this.state.continue && <NoSave />}
            </Fragment>
        )
    }

}