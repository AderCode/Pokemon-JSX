import React, { Component } from 'react';
import Tools from './Tools';
import RightArrow from '../../Utilities/Arrows/RightArrow'
import './Stats.css';


export default class Stats extends Component {
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
            <div className="stats box">
                <div className="header box">
                <span className="title">Trainer Card</span>
                </div>
                
                <div className="frame box">
                <img className="headshot" src={require('../../../srcImages/headshot-pixel-bw.gif')} alt="headshot" />
                </div>

                <div className="name-box box">
                <span className="name tag">NAME: Aderhold</span>
                </div>

                <div className="age-box box">
                <span className="age tag">AGE:26</span>
                </div>

                <div className="hometown-box box">
                <span className="hometown tag">HOMETOWN: Clanton, AL</span>
                </div>

                <div className="essentials-box box">
                <span className="essentials tag">ESSENTIALS:</span>
                <span className="e1 tag">ReactJS(JSX)</span>
                <span className="e2 tag">HTML5</span>
                <span className="e3 tag">ReactNative</span>
                <span className="e4 tag">CSS3</span>
                <span className="e5 tag">NodeJS</span>
                <span className="e6 tag">ExpressJS</span>
                <span className="e7 tag">PassportJS</span>
                <span className="e8 tag">ES6</span>
                <span className="e9 tag">MySQL</span>
                <span className="e10 tag">Stripe</span>
                <span className="e11 tag">Mailgun</span>
                </div>

                {this.state.isSelected && <RightArrow class={"stats-back-arrow"} />}
                <span className="stats-back" onMouseEnter={() => {this.handleMouseEnter()}} onMouseLeave={() => {this.handleMouseLeave()}} onClick={() => this.props.handleClick("main")} >Back</span>
            
                <Tools class = {"one"} src = {require('../../../srcImages/react.png')} alt = {"JSX"} />
                <Tools class = {"two"} src = {require('../../../srcImages/html5.png')} alt = {"HTML5"} />
                <Tools class = {"three"} src = {require('../../../srcImages/css3.png')} alt = {"CSS3"} />
                <Tools class = {"four"} src = {require('../../../srcImages/es6.png')} alt = {"ES6"} />
                <Tools class = {"five"} src = {require('../../../srcImages/nodejs.png')} alt = {"NodeJS"} />
                <Tools class = {"six"} src = {require('../../../srcImages/mysql.png')} alt = {"MySQL"} />

            </div>
        )
    }
}