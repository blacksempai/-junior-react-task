import { connect } from 'react-redux';
import CartOverlay from './CartOverlay';
import {addItem, removeItem, clearCart} from '../../../../reducers/cartReducer';

const mapStateToProps = state => ({...state.cart});

export default connect(mapStateToProps,{addItem, removeItem, clearCart})(CartOverlay);