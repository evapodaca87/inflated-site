import React from 'react';
import '../App.css';
import { Howl, Howler } from 'howler';

var sound = new Howl({
    src: [ '/Sounds/Slide.mp3' ]
});
let play = () => {
    sound.stop();
    sound.play();
    console.log('should be playing');
};

const Music = () => {
    return (
        <div className='music'>
            <h1>Music</h1>
            <h2 onClick={play}>PLAY</h2>
        </div>
    );
};
export default Music;
