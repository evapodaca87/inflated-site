import React from 'react';
import '../App.css';
import { Howl, Howler } from 'howler';

var sound = new Howl({
    src: [ '/Sounds/Glide.mp3' ]
});
var sound2 = new Howl({
    src: [ '/Sounds/Slide.mp3' ]
});
var sound3 = new Howl({
    src: [ '/Sounds/2feetgambino.wav' ]
});
let play = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound.play();
};
let stop = () => {
    sound.stop();
};
let play2 = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound2.play();
};
let stop2 = () => {
    sound2.stop();
};
let play3 = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound3.play();
};
let stop3 = () => {
    sound3.stop();
};

const Music = () => {
    return (
        <div className='music'>
            <h1>Music</h1>
            <div className='songs'>
                <div className='song'>
                    <h2 className='songName'>Slide</h2>
                    <h2 onClick={play2}>PLAY</h2>
                    <h2 onClick={stop2}>STOP</h2>
                </div>
                <div className='song2'>
                    <h2 className='songName'>Glide</h2>
                    <h2 onClick={play}>PLAY</h2>
                    <h2 onClick={stop}>STOP</h2>
                </div>
                <div className='song3'>
                    <h2 className='songName'>2feet Gambino</h2>
                    <h2 onClick={play3}>PLAY</h2>
                    <h2 onClick={stop3}>STOP</h2>
                </div>
            </div>
        </div>
    );
};
export default Music;
