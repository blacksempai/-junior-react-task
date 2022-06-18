import { Component } from 'react';
import classes from './CurrencyDropdown.module.css';

class CurrencyDropdown extends Component {

    render() {
        const { isCurrencyDropdownOpen, currencies, selectCurrency, toggleCurrencyDropdown} = this.props;

        if(!isCurrencyDropdownOpen) {
            return null;
        }

        const currenciesItems = currencies.map(c => 
            <li key={c.label}>
                <button onClick={() => {
                    selectCurrency(c);
                    toggleCurrencyDropdown();
                }}>
                    {c.symbol+' '+c.label}
                </button>
            </li>
        );
        
        return (
            <ul className={classes.currency_dropdown}>
                {currenciesItems}
            </ul>
        );
    }
}

export default CurrencyDropdown;