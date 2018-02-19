import React, { Component } from 'react';
import BattleAudioOGG from './audio_dependancies/128-battle_vs_gym_leader_.ogg'
import BattleAudioMP3 from './audio_dependancies/128-battle (vs gym leader).mp3'
import MenuSelectOGG from './audio_dependancies/300-Menu_Select.ogg'
import MenuSelectMP3 from './audio_dependancies/300-Menu_Select.mp3'
import DamageOGG from './audio_dependancies/301-damage-sfx.ogg'
export default class Audio extends Component {
    render() {
        let OGG;
        let MP3;
        let battle = () => { OGG = BattleAudioOGG; MP3 = BattleAudioMP3 }
        let menuSelect = () => { OGG = MenuSelectOGG; MP3 = MenuSelectMP3 }
        let damage = () => OGG = DamageOGG;
        // let credits = CreditAudioOGG
        let audio = this.props.type

        //eslint-disable-next-line
        audio === "battle" ? battle() : audio === "menuSelect" ? menuSelect() : audio === "damage" ? damage() : false
        if (this.props.loop) {
            return (



                <div className="audio">
                    <audio autoPlay loop>
                        <source src={OGG} type="audio/ogg" />
                        <source src={MP3} type="audio/mp3" />
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