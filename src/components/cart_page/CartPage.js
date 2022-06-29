import classes from './CartPage.module.css';
import { Component } from 'react';
import CartOverlayItem from './../header/actions/cart_action/cart_overlay/cart_overlay_item/CartOverlayItem';

class CartPage extends Component {
    render() {
        const { items, addItem, removeItem, clearCart, selectedCurrency } = this.props
        const count = items.reduce((p,c) => p + c.count, 0);

        const sumPrice = items.reduce((p,c) => {
            let price = c.prices.find(p => p.currency.label === selectedCurrency.label).amount;
            return (p + price * c.count);
        }, 0);

        const taxes = +(sumPrice*0.21).toFixed(2);

        const totalPrice = (sumPrice+taxes).toFixed(2);

        const elements = items.map(i => 
            <CartOverlayItem key={i.id} item={i} selectedCurrency={selectedCurrency} addItem={addItem} removeItem={removeItem} />
        ); 
        return (
            <div>
                <h1>Cart</h1>
                {elements}
                <button onClick={clearCart}>ORDER</button>
            </div>
        )
    }
}

export default CartPage;