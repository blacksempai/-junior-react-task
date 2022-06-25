import { connect } from "react-redux"
import Actions from './Actions';
import { getCurrencies, selectCurrency } from '../../../reducers/currenciesReducer'
import { toggleModal, setIsModalOpen } from './../../../reducers/cartReducer';

const mapStateToProps = state => 
({
    currencies: state.currencies.currencies,
    selectedCurrency: state.currencies.selectedCurrency
});

export default connect(mapStateToProps,{getCurrencies, selectCurrency, toggleModal, setIsModalOpen})(Actions);