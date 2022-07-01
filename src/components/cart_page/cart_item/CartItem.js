import classes from './CartItem.module.css';
import { Component } from 'react';
import AttributeSelector from './../../common/atribute_selector/AttributeSelector';
import { ReactComponent as PlusIcon } from './plus.svg';
import { ReactComponent as MinusIcon } from './minus.svg';
import CartItemGallery from './cart_item_gallery/CartItemGallery';

class CartItem extends Component {
    render() {
        const { item, addItem, removeItem, selectedCurrency} = this.props;
        const { id, name, brand, gallery, prices, attributes, selectedAttributes, count} = item;

        let price = (prices.find(p => p.currency.label === selectedCurrency.label).amount * count).toFixed(2);

        let attributeElements = attributes.map(a => 
            <div key={a.id} className={classes.attribute}>
                <p className={classes.attribute_name}>{a.name}:</p>
                <AttributeSelector attribute={{...a, id: 'cart'+id+a.id}} selectedValue={selectedAttributes[a.name]} onValueChanged={()=>{}}/>
            </div>
        ); 

        return (
            <div className={classes.container}>
                <div className={classes.description}>
                    <h1 className={classes.heading_bold}>{brand}</h1>
                    <h1 className={classes.heading}>{name}</h1>
                    <p className={classes.price}>{selectedCurrency.symbol+price}</p>
                    {attributeElements}
                </div>
                <div className={classes.btn_container}>
                    <button onClick={()=>{addItem(item)}} className={classes.btn}>
                        <PlusIcon/>
                    </button>
                    <p className={classes.count}>{count}</p>
                    <button onClick={()=>{removeItem(item)}} className={classes.btn}>
                        <MinusIcon/>
                    </button>
                </div>
                <CartItemGallery name={name} gallery={gallery} />
            </div>
        )
    }
}

export default CartItem;