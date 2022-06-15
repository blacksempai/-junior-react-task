import { Component } from 'react';
import classes from './Actions.module.css';
import cart from './cart.svg'

class Actions extends Component {
    render() {
        return (
            <div className={classes.actions}>
                <button className={classes.btn}>$</button>
                <button className={classes.btn}><img src={cart} alt="cart"/></button>
            </div>
        );
    }
}

export default Actions;