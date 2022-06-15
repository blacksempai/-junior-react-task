import { Component } from 'react';
import classes from './App.module.css';
import Header from './components/header/Header';


class App extends Component {
    render() {
        return (
            <div className={classes.app}>
                <Header/>
            </div>
        );
    }
}

export default App;