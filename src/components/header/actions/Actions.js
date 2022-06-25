import { Component } from 'react';
import classes from './Actions.module.css';
import cart from './cart.svg'
import arrow from './arrow.svg'
import CurrencyDropdown from './currency_dropdown/CurrencyDropdown'
import CartOverlayContainer from './cart_overlay/CartOverlayContainer';

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

    toggleCurrencyDropdown = (e) => {
        e.stopPropagation();
        this.setState({ isCurrencyDropdownOpen: !this.state.isCurrencyDropdownOpen });
    };

    closeCurrencyDropdown = () => {
        this.setState({ isCurrencyDropdownOpen: false });
    };

    closeCartModal = (e) => {
        this.props.setIsModalOpen(false);
    }

    render() {
        const { currencies = [], selectedCurrency, selectCurrency, toggleModal } = this.props;

        const currencyBtnClasses = this.state.isCurrencyDropdownOpen ?  classes.opened + ' ' + classes.btn : classes.btn
        return (
            <div className={classes.actions}>
                <div className={classes.actions_btn_group}>
                    <button className={currencyBtnClasses} onClick={this.toggleCurrencyDropdown}>
                        <span>{selectedCurrency.symbol}</span>
                        <img className={classes.arrow} src={arrow} alt="↓" />
                    </button>
                    <button className={classes.btn + ' ' + classes.cart_btn} onClick={toggleModal}>
                        <img src={cart} alt="cart"/>
                    </button>
                </div>
                <CurrencyDropdown currencies={currencies}
                                isCurrencyDropdownOpen={this.state.isCurrencyDropdownOpen}
                                selectCurrency={selectCurrency}
                                toggleCurrencyDropdown={this.toggleCurrencyDropdown}/>
                <CartOverlayContainer selectedCurrency={selectedCurrency}/>
            </div>
        );
    }
}

export default Actions;