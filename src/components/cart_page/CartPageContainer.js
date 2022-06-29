import { connect } from 'react-redux';
import CartPage from './CartPage';
import { addItem, removeItem, clearCart } from '../../reducers/cartReducer';

const mapStateToProps = state => ({items: state.cart.items, selectedCurrency: state.currencies.selectedCurrency});

export default connect(mapStateToProps,{addItem, removeItem, clearCart})(CartPage);