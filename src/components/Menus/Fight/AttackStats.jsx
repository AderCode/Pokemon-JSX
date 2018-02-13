import React, { Component } from 'react';
import './CSS/AttackStats.css'

export default class AttackStats extends Component {
    render() {
        let stats = this.props.stats;
        return (
            <div className="attack_stats-box">
                <span className="stat_label">Type/</span>
                <span className="attack_type">{stats.type}</span>
                <span className="power_points">PP:{stats.currentPP}/{stats.basePP}</span>
            </div>
        )
    }
}