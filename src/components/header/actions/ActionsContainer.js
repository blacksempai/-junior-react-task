import { connect } from "react-redux"
import Actions from './Actions';
import { getCurrencies, selectCurrency } from '../../../reducers/currenciesReducer'

const mapStateToProps = state => 
({
    currencies: state.currencies.currencies,
    selectedCurrency: state.currencies.selectedCurrency
});

export default connect(mapStateToProps,{getCurrencies, selectCurrency})(Actions);