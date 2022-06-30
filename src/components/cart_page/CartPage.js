import classes from './CartPage.module.css';
import { Component } from 'react';
import CartItem from './cart_item/CartItem';

class CartPage extends Component {
    render() {
        const { items, addItem, removeItem, clearCart, selectedCurrency } = this.props
        const count = items.reduce((p,c) => p + c.count, 0);

        const sumPrice = items.reduce((p,c) => {
            let price = c.prices.find(p => p.currency.label === selectedCurrency.label).amount;
            return (p + price * c.count);
        }, 0);

        const taxes = (sumPrice*0.21).toFixed(2);

        const totalPrice = (sumPrice+sumPrice*0.21).toFixed(2);

        const elements = items.map(i => 
            <>
                <CartItem key={i.id} item={i} selectedCurrency={selectedCurrency} addItem={addItem} removeItem={removeItem} />
                <hr className={classes.divider}/>
            </>
        ); 
        return (
            <div className='container'>
                <h1 className={classes.heading}>Cart</h1>
                <hr className={classes.divider}/>
                <div>
                    {elements}
                </div>
                <div className={classes.summary}>
                    <p className={classes.summary_line}>
                        <span className={classes.summary_name}>Tax 21%:</span>
                        <span className={classes.summary_value}>{selectedCurrency.symbol+taxes}</span>
                    </p>
                    <p className={classes.summary_line}>
                        <span className={classes.summary_name}>Quantity:</span>
                        <span className={classes.summary_value}>{count}</span>
                    </p>
                    <p className={classes.summary_line}>
                        <span className={classes.summary_name}>Total:</span>
                        <span className={classes.summary_value}>{selectedCurrency.symbol+totalPrice}</span>
                    </p>
                    <button onClick={clearCart} className='btn'>ORDER</button>
                </div>
            </div>
        )
    }
}

export default CartPage;