import React, { Component} from 'react';
import './CSS/NoSave.css'

export default class NoSave extends Component {
    render() {
        return (
                <div id="overlay">
                    <div className="no-save-div">
                        <span className="no-save-text">
                            No save data found.
                    </span>
                    </div>
                </div>
        )
    }
}