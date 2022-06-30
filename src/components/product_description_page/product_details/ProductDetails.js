import classes from './ProductDetails.module.css';
import { Component } from 'react';
import { Markup } from 'interweave';
import AttributeSelector from '../../common/atribute_selector/AttributeSelector';

class ProductDetails extends Component {

    onAttributeValueChanged = (e) => {
        const {name, value} = e.target;
        this.props.selectAttributeValue(name, value);
    }

    addProductToCart = (e) => {
        const { id, name, brand, gallery, attributes = [], prices = [],
             selectedAttributes, addItem } = this.props;
        const itemId = id+Object.entries(selectedAttributes);
        const item = {id: itemId, name, brand, gallery, attributes, prices, selectedAttributes, count: 1 };
        addItem(item);
    }

    render() {
        const { name, brand, attributes = [], description, addItem,
            inStock, prices = [], selectedCurrency = {}, selectedAttributes } = this.props;
            
        const price = prices.find(p => selectedCurrency.label === p.currency.label);
        
        const attributeSelectors = attributes.map(a =>
            <div key={a.id} className={classes.product_attributes_item}>
                <p className={classes.label}>{a.name+':'}</p>
                <AttributeSelector attribute={a} selectedValue={selectedAttributes[a.name]} onValueChanged={this.onAttributeValueChanged}/>
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
            <button className='btn' disabled={!inStock} onClick={this.addProductToCart}>
                {inStock ? 'ADD TO CART' : 'OUT OF STOCK' }
            </button>
            <div className={classes.product_description}>
                <Markup content={description}/>
            </div>
        </div>
        )
    }
}

export default ProductDetails;