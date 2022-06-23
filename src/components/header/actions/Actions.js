import { Component } from 'react';
import classes from './Actions.module.css';
import cart from './cart.svg'
import arrow from './arrow.svg'
import CurrencyDropdown from './currency_dropdown/CurrencyDropdown'

class Actions extends Component {

    componentDidMount() {
        if(!this.props.currencies.length||!this.props.selectCurrency) {
            this.props.getCurrencies();
        }
        document.body.addEventListener('click', this.closeCurrencyDropdown);
    }

    constructor(props) {
        super(props);
        this.state = {
            isCurrencyDropdownOpen: false
        };
    }

    toggleCurrencyDropdown = () => {
        this.setState({ isCurrencyDropdownOpen: !this.state.isCurrencyDropdownOpen });
    };

    closeCurrencyDropdown = () => {
        this.setState({ isCurrencyDropdownOpen: false });
    };

    render() {
        const { currencies = [], selectedCurrency, selectCurrency } = this.props;

        const currencyBtnClasses = this.state.isCurrencyDropdownOpen ?  classes.opened + ' ' + classes.btn : classes.btn
        return (
            <div className={classes.actions} onClick={e => e.stopPropagation()}>
                <div className={classes.actions_btn_group}>
                    <button className={currencyBtnClasses} onClick={this.toggleCurrencyDropdown}>
                        <span>{selectedCurrency.symbol}</span>
                        <img className={classes.arrow} src={arrow} alt="↓" />
                    </button>
                    <button className={classes.btn + ' ' + classes.cart_btn}>
                        <img src={cart} alt="cart"/>
                    </button>
                </div>
                <CurrencyDropdown currencies={currencies}
                                isCurrencyDropdownOpen={this.state.isCurrencyDropdownOpen}
                                selectCurrency={selectCurrency}
                                toggleCurrencyDropdown={this.toggleCurrencyDropdown}/>
            </div>
        );
    }
}

export default Actions;