import classes from './CartOverlayItem.module.css';
import { Component } from 'react';
import AttributeSelector from './../../../../../common/atribute_selector/AttributeSelector';
import plus from './plus.svg';
import minus from './minus.svg';

class CartOverlayItem extends Component {
    render() {
        const { item, addItem, removeItem, selectedCurrency} = this.props;
        const { id, name, brand, gallery, prices, attributes, selectedAttributes, count} = item;

        let price = prices.find(p => p.currency.label === selectedCurrency.label).amount;

        let attributeElements = attributes.map(a => 
            <div key={a.id} className={classes.attribute}>
                <p className={classes.attribute_name}>{a.name}:</p>
                <AttributeSelector attribute={{...a, id: id+a.id}} selectedValue={selectedAttributes[a.name]} onValueChanged={()=>{}}/>
            </div>
        ); 

        return (
            <div className={classes.container}>
                <div className={classes.description}>
                    <h1 className={classes.heading}>{brand}</h1>
                    <h1 className={classes.heading}>{name}</h1>
                    <p className={classes.price}>{selectedCurrency.symbol+price}</p>
                    {attributeElements}
                </div>
                <div className={classes.btn_container}>
                    <button onClick={()=>{addItem(item)}} className={classes.btn}>
                        <img src={plus} alt="+" />
                    </button>
                    <p className={classes.count}>{count}</p>
                    <button onClick={()=>{removeItem(item)}} className={classes.btn}>
                        <img src={minus} alt="-" />
                    </button>
                </div>
                <div className={classes.photo}>
                    <img src={gallery[0]} alt={name} />
                </div>
            </div>
        )
    }
}

export default CartOverlayItem;