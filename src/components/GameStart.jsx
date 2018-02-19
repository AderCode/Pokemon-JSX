import React, { Component, Fragment} from 'react';
import LeftArrow from './Utilities/Arrows/LeftArrow'
import Audio from './Music/Audio'

export default class GameStart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "null",
            isHidden: true,
        }

    }
    handleMouseEnter(select) {
        this.setState({ isHidden : false, selected: select})   
    }

    handleMouseLeave(){
        this.setState({ isHidden : true, selected: "null"})
    }

    render() {
        let selected = this.state.selected
        return (
            <div className="main box">
            <div className="box save_files">
            {!this.state.isHidden && <Fragment><LeftArrow class = {selected} /><Audio type = {"menuSelect"} /></Fragment>}
            <span className="new_game" onClick={() => this.props.handleNewGame()} onMouseEnter={() => this.handleMouseEnter("newGame")} onMouseLeave={() => this.handleMouseLeave()} >New Game</span>
            <span className="continue" onClick={() => this.props.handleContinue()} onMouseEnter={() => this.handleMouseEnter("_continue")} onMouseLeave={() => this.handleMouseLeave()}>Continue</span>
            </div>
            
            </div>
        )
    }
}