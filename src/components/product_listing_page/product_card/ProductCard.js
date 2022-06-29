import classes from './ProductCard.module.css';
import { ReactComponent as CartIcon } from './cart.svg';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProductCard extends Component {

    addProductToCart = (e) => {
        const { id, name, brand, gallery, attributes = [], prices = [], addItem } = this.props;
        
        const selectedAttributes = attributes.reduce((a, v) => ({...a, [v.name]: v.items[0].value}),{})
        const itemId = id+Object.entries(selectedAttributes);
        const item = { id: itemId, name, brand, gallery, attributes, prices, selectedAttributes, count: 1 };
        addItem(item);
    }

    render() {
        const { id, name, brand, gallery, inStock, prices, selectedCurrency } = this.props;
        const price = prices.find(p => p.currency.label === selectedCurrency.label);
        return (
            <div className={ inStock ? classes.card : classes.card + ' ' + classes.blured}>
                <NavLink to={'/product/'+id} className={classes.card_link}>
                    <img className={classes.card_img} src={gallery[0]} alt={name} />
                </NavLink>
                <div className={classes.card_body}>
                    { inStock ? 
                    <button className={classes.card_btn} onClick={this.addProductToCart}>
                        <CartIcon/>
                    </button> : null
                    }
                    <h2 className={classes.card_title}>
                        <NavLink to={'/product/'+id} className={classes.card_link}>
                            {brand+' '+name}
                        </NavLink>
                    </h2>
                    <p className={classes.price}>{selectedCurrency.symbol + price?.amount}</p>
                </div>          
            </div>
        )
    }
}

export default ProductCard;