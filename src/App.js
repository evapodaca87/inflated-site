import React, { Component } from 'react';
import './App.css';
import Head from './Components/Head';
import About from './Components/About';
import Music from './Components/Music';
import Contact from './Components/Contact';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Head />
                <About />
                <Music />
                <Contact />
            </div>
        );
    }
}

export default App;
