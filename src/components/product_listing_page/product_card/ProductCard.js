import classes from './ProductCard.module.css';
import cart from './cart.svg';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProductCard extends Component {
    render() {
        const { id, name, brand, gallery, inStock, prices, selectedCurrency } = this.props;
        const price = prices.find(p => p.currency.label === selectedCurrency.label);
        return (
            <div className={ inStock ? classes.card : classes.card + ' ' + classes.blured}>
                <NavLink to={'/product/'+id} className={classes.card_link}>
                    <img className={classes.card_img} src={gallery[0]} alt={name} />
                </NavLink>
                <div className={classes.card_body}>
                    {inStock ? <button className={classes.card_btn}><img src={cart} alt="buy"/></button>:''}
                    <h2 className={classes.card_title}>
                        <NavLink to={'/product/'+id} className={classes.card_link}>
                            {brand+' '+name}
                        </NavLink>
                    </h2>
                    <p className={classes.price}>{selectedCurrency.symbol + ' ' + price?.amount}</p>
                </div>          
            </div>
        )
    }
}

export default ProductCard;