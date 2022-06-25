import classes from './CartPage.module.css';
import { Component } from 'react';

class CartPage extends Component {
    render() {
        const { items, addItem, removeItem, clearCart } = this.props
        const elements = items.map(i => <div key={i.id}>{i.id}:{i.count}</div>);  
        return (
            <div>
                Cart
                {elements}
                <button onClick={clearCart}>CHECK OUT</button>
            </div>
        )
    }
}

export default CartPage;