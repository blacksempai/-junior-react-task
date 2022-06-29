import { Component } from 'react';
import classes from './Actions.module.css';
import CartActionContainer from './cart_action/CartActionContainer';
import CurrencyActionContainer from './currency_action/CurrencyActionContainer';

class Actions extends Component {

    render() {
        return (
            <div className={classes.actions}>
                <div className={classes.actions_btn_group}>
                    <CurrencyActionContainer/>
                    <CartActionContainer/>
                </div>
            </div>
        );
    }
}

export default Actions;