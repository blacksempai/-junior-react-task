import classes from './ProductCard.module.css'
import { Component } from 'react';

class ProductCard extends Component {
    render() {
        const { id, name, gallery, inStock, prices, selectedCurrency } = this.props;
        const price = prices.find(p => p.currency.label === selectedCurrency.label);
        return (
            <div className={classes.card}>
                <img className={classes.card_img} src={gallery[0]} alt={name} />
                <div className={classes.card_body}>
                    <h2 className={classes.card_title}>{name}</h2>
                    <p className={classes.price}>{selectedCurrency.symbol + ' ' + price.amount}</p>
                </div>          
            </div>
        )
    }
}

export default ProductCard;