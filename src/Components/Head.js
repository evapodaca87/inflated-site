import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <div className='head'>
            <h1>Inflated Penguins</h1>
            <h1>🎈🐧</h1>
            <Link to='/'>Home</Link>
            <Link to='/music'>Music</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};
export default Head;
