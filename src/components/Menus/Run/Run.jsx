import React, { Component, Fragment } from 'react';
import Menus from '../Menus';
import './Run.css'
import RightArrow from '../../Utilities/Arrows/RightArrow'

export default class Run extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false
        }
    }

    handleMouseEnter() {
        this.setState({ isSelected: true })
    }

    handleMouseLeave() {
        this.setState({ isSelected: false })
    }

    render() {
        return (
            <Fragment>
                
                <div id="overlay">
                <div className="run-div">
                    <span className="run-text">
                        You can not escape...
                    </span>
                    {this.state.isSelected && <RightArrow class={"run-back-arrow"} />}
                    <span className="run-back"
                        onClick={() => this.props.handleClick("main")}
                        onMouseEnter={() => this.handleMouseEnter()}
                        onMouseLeave={() => this.handleMouseLeave()}>
                    Back
                    </span>
                </div>
                </div>
                <Menus />
            </Fragment>
        )
    }
}