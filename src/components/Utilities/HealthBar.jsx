import React, { Component } from 'react';
import './HealthBar.css'

export default class HealthBar extends Component {
    render() {
        return (
            <div className='back_bar box'>
                <div className='front_bar' style={{ width: `${this.props.width}rem` }}></div>
            </div>
        )
    }
}