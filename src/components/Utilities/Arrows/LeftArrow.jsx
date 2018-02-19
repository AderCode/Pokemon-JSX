import React, { Component } from 'react';
import './Arrows.css'

export default class LeftArrow extends Component {
    render() {
    return <div className={`${this.props.class} arrow-left`}></div>
    }
}