import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <div className='head'>
            <h1 className="header">Inflated Penguins🎈🐧</h1>
            <div className='nav'>
                <Link to='/'>
                    <h2 className='nav'>Home</h2>
                </Link>
                <Link to='/music'>
                    <h2 className='nav'>Music</h2>
                </Link>
                <Link to='/contact'>
                    <h2 className='nav'>Contact</h2>
                </Link>
            </div>
        </div>
    );
};
export default Head;
