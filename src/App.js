import { Component } from 'react';
import classes from './App.module.css';
import Header from './components/header/Header';
import Router from './Router';

class App extends Component {
    render() {
        return (
            <div className={classes.app}>
                <Header/>
                <Router/>
            </div>
        );
    }
}

export default App;