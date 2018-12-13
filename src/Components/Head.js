import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <div className='head'>
            <h1>Inflated Penguins</h1>
            <h1>🎈🐧</h1>
            <Link to='/'>
                <h2>Home</h2>
            </Link>
            <Link to='/music'>
                <h2>Music</h2>
            </Link>
            <Link to='/contact'>
                <h2>Contact</h2>
            </Link>
        </div>
    );
};
export default Head;
