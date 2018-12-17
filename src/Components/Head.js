import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <div className='head'>
            <h1 className="header">Inflated Penguins</h1>
            <div className='nav'>
                <Link to='/'>
                <img className="navLink" src="https://image.flaticon.com/icons/svg/70/70370.svg"></img>
                </Link>
                <Link to='/music'>
                <img className="navLink" src="https://image.flaticon.com/icons/svg/149/149648.svg"></img>
                </Link>
                <Link to='/contact'>
                <img className="navLink" src="https://image.flaticon.com/icons/svg/47/47973.svg"></img>
                </Link>
            </div>
        </div>
    );
};
export default Head;
