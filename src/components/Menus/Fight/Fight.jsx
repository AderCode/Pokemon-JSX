import React, { Component, Fragment } from 'react';
import AttackStats from './AttackStats';
import RightArrow from '../../Utilities/Arrows/RightArrow'
import './CSS/Fight.css'

export default class Fight extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHidden: true,
            class: "null",
            isSelected: false,
            selected: "null"
        }
    }
    componentDidMount() {
        // console.log(this.props.store)
    }

    handleMouseEnter(arrowClass, move) {
        if (move !== -1) {
            this.setState({ isHidden: false, isSelected: true, class: arrowClass, selected: move })
        } else {
            this.setState({ isHidden: false, class: arrowClass, })
        }
    }

    handleMouseLeave() {
        this.setState({ isHidden: true, isSelected: false, class: "null", selected: "null" })
    }




    render() {
        let attack = this.props.attack.player.moves;
        let selected = this.state.class;
        return (
            <Fragment>
                <div className="attacks-box">
                    {!this.state.isHidden && <RightArrow class={selected} />}
                    <span
                        id="attacks"
                        className="attack_slot_1"
                        onClick={() => { this.props.handleAttack(1); this.props.handleClick("main") }}
                        onMouseEnter={() => this.handleMouseEnter("attack_slot_1-arrow", 1)}
                        onMouseLeave={() => this.handleMouseLeave()}>
                        {attack["1"].name}
                    </span>

                    <span
                        id="attacks"
                        className="attack_slot_2"
                        onClick={() => { this.props.handleAttack(2); this.props.handleClick("main") }}
                        onMouseEnter={() => this.handleMouseEnter("attack_slot_2-arrow", 2)}
                        onMouseLeave={() => this.handleMouseLeave()}>
                        {attack["2"].name}
                    </span>

                    <span
                        id="attacks"
                        className="attack_slot_3"
                        onClick={() => { this.props.handleAttack(3); this.props.handleClick("main") }}
                        onMouseEnter={() => this.handleMouseEnter("attack_slot_3-arrow", 3)}
                        onMouseLeave={() => this.handleMouseLeave()}>
                        {attack["3"].name}
                    </span>

                    <span
                        id="attacks"
                        className="attack_slot_4"
                        onClick={() => { this.props.handleAttack(4); this.props.handleClick("main") }}
                        onMouseEnter={() => this.handleMouseEnter("attack_slot_4-arrow", 4)}
                        onMouseLeave={() => this.handleMouseLeave()}>
                        {attack["4"].name}
                    </span>

                    <span
                        className="back"
                        onClick={() => this.props.handleClick("main")}
                        onMouseEnter={() => this.handleMouseEnter("fight-back-arrow", -1)}
                        onMouseLeave={() => this.handleMouseLeave()}>
                        Back
                    </span>
                </div>
                {this.state.isSelected && <AttackStats stats={attack[this.state.selected]} />}
            </Fragment>
        )
    }
}