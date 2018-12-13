import React, { Component } from 'react';
import './App.css';
import About from './Components/About';
import Music from './Components/Music';
import Contact from './Components/Contact';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Inflated Penguins</h1>
                <h1>🎈🐧</h1>
                <About />
                <Music />
                <Contact />
            </div>
        );
    }
}

export default App;
