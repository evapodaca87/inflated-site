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
var sound4 = new Howl({
    src: [ '/Sounds/Arctic.mp3' ]
});
var sound5 = new Howl({
    src: [ '/Sounds/FinallyTakuVocal.mp3' ]
});
var sound6 = new Howl({
    src: [ '/Sounds/casamir.mp3' ]
});
var sound7 = new Howl({
    src: [ '/Sounds/mean.mp3' ]
});
var sound8 = new Howl({
    src: [ '/Sounds/intou.mp3' ]
});
let play = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
    sound8.stop();
    sound.play();
};
let stop = () => {
    sound.stop();
};
let play2 = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
    sound8.stop();
    sound2.play();
};
let stop2 = () => {
    sound2.stop();
};
let play3 = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
    sound8.stop();
    sound3.play();
};
let stop3 = () => {
    sound3.stop();
};
let play4 = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
    sound8.stop();
    sound4.play();
};
let stop4 = () => {
    sound4.stop();
};
let play5 = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
    sound8.stop();
    sound5.play();
};
let stop5 = () => {
    sound5.stop();
};
let play6 = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
    sound8.stop();
    sound6.play();
};
let stop6 = () => {
    sound6.stop();
};
let play7 = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
    sound8.stop();
    sound7.play();
};
let stop7 = () => {
    sound7.stop();
};
let play8 = () => {
    sound.stop();
    sound2.stop();
    sound3.stop();
    sound4.stop();
    sound5.stop();
    sound6.stop();
    sound7.stop();
    sound8.stop();
    sound8.play();
};
let stop8 = () => {
    sound8.stop();
};

const Music = () => {
    return (
        <div className='music'>
            <h1>Music</h1>
            <div className='songs'>
                <div className='song4'>
                    <h2 className='songName'>Arctic Light</h2>
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660570.svg'
                        onClick={play4}
                    />
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660569.svg'
                        onClick={stop4}
                    />
                </div>
                <div className='song'>
                    <h2 className='songName'>Slide</h2>
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660570.svg'
                        onClick={play2}
                    />
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660569.svg'
                        onClick={stop2}
                    />
                </div>
                <div className='song2'>
                    <h2 className='songName'>Glide</h2>
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660570.svg'
                        onClick={play}
                    />
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660569.svg'
                        onClick={stop}
                    />
                </div>
                <div className='song5'>
                    <h2 className='songName'>Finally</h2>
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660570.svg'
                        onClick={play5}
                    />
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660569.svg'
                        onClick={stop5}
                    />
                </div>
                <div className='song3'>
                    <h2 className='songName'>2feet Gambino</h2>
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660570.svg'
                        onClick={play3}
                    />
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660569.svg'
                        onClick={stop3}
                    />
                </div>
                <div className='song6'>
                    <h2 className='songName'>Casamir Remix</h2>
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660570.svg'
                        onClick={play6}
                    />
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660569.svg'
                        onClick={stop6}
                    />
                </div>
                <div className='song7'>
                    <h2 className='songName'>Mean 2 Me Remix</h2>
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660570.svg'
                        onClick={play7}
                    />
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660569.svg'
                        onClick={stop7}
                    />
                </div>
                <div className='song8'>
                    <h2 className='songName'>Into U Remix</h2>
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660570.svg'
                        onClick={play8}
                    />
                    <img
                        className='playStop'
                        src='https://image.flaticon.com/icons/svg/660/660569.svg'
                        onClick={stop8}
                    />
                </div>
            </div>
        </div>
    );
};
export default Music;
