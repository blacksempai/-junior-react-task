import { Component } from 'react';
import classes from './Header.module.css';
import { ReactComponent as LogoIcon } from './logo.svg'
import NavigationContainer from './navigation/NavigationContainer';
import Actions from './actions/Actions';

class Header extends Component {
    render() {
        return (
            <header>
                <div className={classes.header + " container"}>
                    <NavigationContainer/>
                    <LogoIcon className={classes.logo}/>
                    <Actions/>
                </div>
            </header>
        );
    }
}

export default Header;