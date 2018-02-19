import React, { Component } from 'react';

export default class ActionMessage extends Component {
    render() {
        return (
            <div className="atk-msg-box">
            <span className="atk-msg">{this.props.msg}</span>
            </div>
        )
    }

}