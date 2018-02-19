import React, { Component } from 'react'
import PlayerAvatar from '../srcImages/player_sprite.png'
import CovalenceImg from '../srcImages/covalence.png'
import Audio from './Music/Audio'

export default class Credit extends Component {
    render() {
        return (
            <div className="box main">
                <Audio type={"ending"} />
                <div className="faded fade-in-slow">
                    <img className="player-avatar" src={PlayerAvatar} alt="Player Avatar" />
                    <div className="details box">
                        <span id="details-text">
                            DETAILS: <br />
                            __________________________
                    <br /><br />

                            PokemonJSX <br /><br /><br />
                            Started: <br /><br />
                            2/13/18<br /><br /><br />
                            Finished: <br /><br />
                            (InProgress)
                    </span>
                    </div>

                    <div className="credit-text-box slide-up">
                        <span id="header">
                            PokemonJSX<br />
                            Covalence Edition<br />
                            <br /><br /><br /><br />
                            <br /><br /><br /><br />
                            <u>Credits</u></span>
                        <span id="credit-text"><br />
                            <br /><br /><br />
                            DEVELOPMENT BY:<br /><br />
                            <i>Matthew Aderhold</i><br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            LANGUAGES USED:<br /><br />
                            <i>ReactJS and CSS</i><br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            SPECIAL THANKS:<br /><br />
                            <i>
                                - Covalence.io<br /><br />
                                - Paul Dobbs<br /><br />
                                - David Stapleton<br /><br />
                                - Will Johnston<br /><br />
                                - Matt Landers<br /><br />
                                - Jackson Carr<br /><br />
                                - Luke Przekwas<br /><br />
                                -  Tyler Dobbs<br /><br />
                            </i><br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br /> <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <img src={CovalenceImg} alt="Covalence" className="credit-logo" /> <br /><br />
                            PokemonJSX <br />
                            2018 <br /> <br /> <br /> <br />
                            THANK YOU FOR PLAYING!!!

                    </span>
                    </div>
                </div>
            </div>
        )
    }
}