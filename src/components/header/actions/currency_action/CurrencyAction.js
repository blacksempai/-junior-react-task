import { Component } from 'react';
import { ReactComponent as ArrowIcon } from './arrow.svg'
import classes from './CurrencyAction.module.css'
import CurrencyDropdown from './currency_dropdown/CurrencyDropdown';

class CurrencyAction extends Component {

    componentDidMount() {
        if(!this.props.currencies.length||!this.props.selectCurrency) {
            this.props.getCurrencies();
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            if(this.props.isDropdownOpen) {
                document.addEventListener('click', this.closeCurrencyDropdown);
            }
            else {
                document.removeEventListener('click', this.closeCurrencyDropdown);
            }
        }, 0)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeCurrencyDropdown);
    }

    toggleCurrencyDropdown = () => {
        this.props.setIsDropdownOpen(!this.props.isDropdownOpen);
    };

    closeCurrencyDropdown = () => {
        this.props.setIsDropdownOpen(false); 
    };

    render() {
        const { selectedCurrency, isDropdownOpen, currencies, selectCurrency } = this.props;

        const currencyBtnClasses = isDropdownOpen ?  classes.opened + ' ' + classes.btn : classes.btn
        
        return (
            <div>
                <button className={currencyBtnClasses} onClick={this.toggleCurrencyDropdown}>
                    <span>{selectedCurrency.symbol}</span>
                    <ArrowIcon className={classes.arrow}/>
                </button>
                <CurrencyDropdown
                    currencies={currencies}
                    isDropdownOpen={isDropdownOpen}
                    selectCurrency={selectCurrency}
                    toggleCurrencyDropdown={this.toggleCurrencyDropdown}
                />
            </div>
        )
    }
}

export default CurrencyAction;