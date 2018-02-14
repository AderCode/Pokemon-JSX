import React, { Component } from 'react';

export default class AttackMsg extends Component {
    render() {
        return (
            <div className="atk-msg-box">
            <p className="atk-msg">{this.props.msg}</p>
            </div>
        )
    }

}