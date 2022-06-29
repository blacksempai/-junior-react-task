import classes from './CartOverlay.module.css';
import { Component } from 'react';
import CartOverlayItem from './cart_overlay_item/CartOverlayItem';
import { NavLink } from 'react-router-dom';

class CartOverlay extends Component {
    render() {
        const { items, isDropdownOpen, addItem, removeItem, clearCart, selectedCurrency, count } = this.props;

        if(!isDropdownOpen) {
            return null;
        }

        let totalPrice = items.reduce((p,c) => {
            let price = c.prices.find(p => p.currency.label === selectedCurrency.label).amount;
            return (p + price * c.count);
        }, 0);

        //Taxes
        totalPrice = (totalPrice+totalPrice*0.21).toFixed(2);

        const elements = items.map(i => 
            <CartOverlayItem key={i.id} item={i} selectedCurrency={selectedCurrency} addItem={addItem} removeItem={removeItem} />
        );

        return (
            <div className={classes.cart_overlay} onClick={e => e.stopPropagation()}>
                <p className={classes.cart_header}>
                    <span className={classes.bold}>Bag, </span>
                    <span className={classes.count}>{count + ' item' + (count > 1 ? 's' : '')}</span>
                </p>
                <div className={classes.card_items_container}>
                    {elements}
                </div>
                <p className={classes.cart_total}>
                    <span className={classes.bold}>Total </span>
                    <span className={classes.price}>{selectedCurrency.symbol+totalPrice}</span>
                </p>
                <div className={classes.card_btn_container}>
                    <NavLink to="/cart" className={classes.btn+' '+classes.btn_white}>VIEW BAG</NavLink>
                    <button onClick={clearCart} className={classes.btn+' '+classes.btn_primary}>CHECK OUT</button>
                </div>
            </div>
        )
    }
}

export default CartOverlay;