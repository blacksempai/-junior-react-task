import { connect } from 'react-redux';
import { setIsDropdownOpen, addItem, removeItem, clearCart } from './../../../../reducers/cartReducer';
import CartAction from './CartAction';

const mapStateToProps = state => ({
    ...state.cart,
    selectedCurrency: state.currencies.selectedCurrency
})

export default connect(mapStateToProps,{setIsDropdownOpen, addItem, removeItem, clearCart})(CartAction)