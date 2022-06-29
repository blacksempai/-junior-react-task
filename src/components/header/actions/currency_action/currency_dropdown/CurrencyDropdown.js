import { Component } from 'react';
import classes from './CurrencyDropdown.module.css';

class CurrencyDropdown extends Component {

    render() {
        const { isDropdownOpen, currencies, selectCurrency, toggleCurrencyDropdown} = this.props;

        if(!isDropdownOpen) {
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
            <ul className={classes.currency_dropdown} onClick={e => e.stopPropagation()}>
                {currenciesItems}
            </ul>
        );
    }
}

export default CurrencyDropdown;