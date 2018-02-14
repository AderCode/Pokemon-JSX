import React, { Component } from 'react';
import Fight from './Fight/Fight'
import Run from './Run'
import RightArrow from '../RightArrow'
import './Menus.css'

export default class Menus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHidden: true,
            selected: "null",
            currentMenu: `main`
        }

    }

    handleClick(menu) {
        this.setState({ currentMenu: menu })
    }

    handleMouseEnter(select) {
        this.setState({ isHidden : false, selected: select})   
    }

    handleMouseLeave(){
        this.setState({ isHidden : true, selected: "null"})
    }




    render() {
        let menu = this.state.currentMenu
        let selected = this.state.selected
        if (menu === "fight") {
            return <Fight handleClick = {this.handleClick.bind(this)} attack = {this.props.attack}/>
        } else if (menu === "run") {
            return <Run handleClick = {this.handleClick.bind(this)} />
        } else {

            return (
                <div className="menus-box">

                {!this.state.isHidden && <RightArrow class = {selected} />}
                <span className="fight" onClick={() => this.handleClick("fight")} onMouseEnter={() => this.handleMouseEnter("fight-arrow")} onMouseLeave={()=>this.handleMouseLeave()}>Fight</span>    
                
                <span className="PkMn" onMouseEnter={() => this.handleMouseEnter("PkMn-arrow")} onMouseLeave={()=>this.handleMouseLeave()}>PkMn</span>

                    <span className="items" onMouseEnter={() => this.handleMouseEnter("items-arrow")} onMouseLeave={()=>this.handleMouseLeave()}>Items</span>    
                    
                    <span className="run" onClick={() => this.handleClick("run")} onMouseEnter={() => this.handleMouseEnter("run-arrow")} onMouseLeave={()=>this.handleMouseLeave()}>Run</span>

                </div>
            )
        }




    }
}