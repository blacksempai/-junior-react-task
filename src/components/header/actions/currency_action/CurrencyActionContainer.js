import { connect } from "react-redux"
import { getCurrencies, selectCurrency, setIsDropdownOpen } from '../../../../reducers/currenciesReducer'
import CurrencyAction from './CurrencyAction';

export default connect(state => ({...state.currencies}),
{getCurrencies, selectCurrency, setIsDropdownOpen})(CurrencyAction);