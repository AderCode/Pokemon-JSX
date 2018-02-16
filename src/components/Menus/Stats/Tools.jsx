import React, { Component } from 'react';

export default class Tools extends Component {
    render() {
        return (
            <div className={`tool box ${this.props.class}`}>
                <img className={`tool-ico ${this.props.alt}`} src={this.props.src} alt={this.props.alt} />
            </div>

        )

    }
}