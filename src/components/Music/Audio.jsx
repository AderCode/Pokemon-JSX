import React, { Component } from 'react';
import BattleAudioOGG from './audio_dependancies/128-battle_vs_gym_leader_.ogg'
import BattleAudioMP3 from './audio_dependancies/128-battle (vs gym leader).mp3'
import BattleAudioWEBM from './audio_dependancies/128_battle__vs_gym_leader_.webm'
import MenuSelectOGG from './audio_dependancies/300-Menu_Select.ogg'
import MenuSelectMP3 from './audio_dependancies/300-Menu_Select.mp3'
import DamageOGG from './audio_dependancies/301-damage-sfx.ogg'
//import DamageMP3 HERE
import VictoryOGG from './audio_dependancies/129-victory_vs_gym_leader_.ogg'
//import VictoryMP3 HERE
import EndingOGG from './audio_dependancies/145-ending.ogg'



export default class Audio extends Component {
    render() {
        let OGG;
        let MP3;
        let WEBM;
        let battle = () => { OGG = BattleAudioOGG; MP3 = BattleAudioMP3; WEBM = BattleAudioWEBM }
        let menuSelect = () => { OGG = MenuSelectOGG; MP3 = MenuSelectMP3 }
        let damage = () => OGG = DamageOGG; // MP3 = DamageMP3
        let victory = () => OGG = VictoryOGG; // MP3 = VictoryMP3
        let ending = () => OGG = EndingOGG; // MP3 = EndingMP3
        let audio = this.props.type

        //eslint-disable-next-line
        audio === "battle" ? battle() : audio === "menuSelect" ? menuSelect() : audio === "damage" ? damage() : audio === "victory" ? victory(): audio === "ending" ? ending() : false
        if (this.props.loop) {
            return (



                <div className="audio">
                    <audio autoPlay loop>
                        <source src={OGG} type="audio/ogg" />
                        <source src={MP3} type="audio/mp3" />
                        <source src={WEBM} type="audio/webm" />
                    </audio>
                </div>


            )
        } else {
            return (
                <div className="audio">
                    <audio autoPlay >
                        <source src={OGG} type="audio/ogg" />
                        <source src={MP3} type="audio/mp3" />
                    </audio>
                </div>
            )
        }
    }
}