import React from 'react';
import '../App.css';
import { Howl, Howler } from 'howler';

var sound = new Howl({
    src: [ '/Sounds/Slide.mp3' ]
});
var sound2 = new Howl({
    src: [ '/Sounds/Glide.mp3' ]
});
let play = () => {
    sound.stop();
    sound2.stop();
    sound.play();
    console.log('should be playing');
};
let stop = () => {
    sound.stop();
};
let play2 = () => {
    sound.stop();
    sound2.stop();
    sound2.play();
    console.log('should be playing');
};
let stop2 = () => {
    sound2.stop();
};

const Music = () => {
    return (
        <div className='music'>
            <h1>Music</h1>
            <div className='songs'>
                <div className='song'>
                    <h2 className='songName'>Glide</h2>
                    <h2 onClick={play2}>PLAY</h2>
                    <h2 onClick={stop2}>STOP</h2>
                </div>
                <div className='song2'>
                    <h2 className='songName'>Slide</h2>
                    <h2 onClick={play}>PLAY</h2>
                    <h2 onClick={stop}>STOP</h2>
                </div>
            </div>
        </div>
    );
};
export default Music;
