import { connect } from "react-redux"
import Actions from './Actions';
import { getCurrencies, selectCurrency } from '../../../reducers/currencyReducer'

const mapStateToProps = state => 
({currencies: state.currency.currencies, selectedCurrency: state.currency.selectedCurrency});

export default connect(mapStateToProps,{getCurrencies, selectCurrency})(Actions);