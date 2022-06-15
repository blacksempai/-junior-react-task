import { Component } from 'react';
import classes from './Header.module.css';
import Navigation from './navigation/Navigation';
import Actions from './actions/Actions';
import logo from './logo.svg'

class Header extends Component {
    render() {
        return (
            <header className={classes.header + " container"}>
                <Navigation/>
                <img src={logo} alt="logo" className={classes.logo}/>
                <Actions/>
            </header>
        );
    }
}

export default Header;