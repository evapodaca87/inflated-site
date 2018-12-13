import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Head from './Components/Head';
import About from './Components/About';
import Music from './Components/Music';
import Contact from './Components/Contact';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Head />
                    <Switch>
                        <Route exact path='/' component={About} />
                        <Route path='/music' component={Music} />
                        <Route path='/contact' component={Contact} />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
