import classes from './ProductDetails.module.css';
import { Component } from 'react';
import { Markup } from 'interweave';
import AttributeSelector from '../../common/atribute_selector/AttributeSelector';

class ProductDetails extends Component {
    render() {
        const { id, name, brand, category, attributes, 
            description, inStock, prices = [], selectedCurrency = {} } = this.props;

        const price = prices.find(p => selectedCurrency.label === p.currency.label);

        const attributeSelectors = attributes.map(a =>
            <div key={a.id} className={classes.product_attributes_item}>
                <p className={classes.label}>{a.name+':'}</p>
                <AttributeSelector attribute={a} />
            </div>
        );
        
        return (
            <div className={classes.product_details}>
            <h1 className={classes.product_brand}>{brand}</h1>
            <h2 className={classes.product_name}>{name}</h2>
            <div className={classes.product_attributes}>
                {attributeSelectors}
            </div>
            <div className={classes.product_price}>
                <p className={classes.product_label}>PRICE:</p>
                <p className={classes.product_price_value}>{price?.currency?.symbol+price?.amount||''}</p>
            </div>
            <button className={classes.cart_btn} disabled={!inStock}>{inStock ? 'ADD TO CART' : 'OUT OF STOCK' }</button>
            <div className={classes.product_description}>
                <Markup content={description}/>
            </div>
        </div>
        )
    }
}

export default ProductDetails;