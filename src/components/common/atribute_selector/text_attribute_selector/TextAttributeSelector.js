import classes from './TextAttributeSelector.module.css';
import { Component } from 'react';


class TextAttributeSelector extends Component {
    render() {
        const { id, items, onValueChanged, selectedValue } = this.props;
        const itemsInputs = items.map(i => 
            <div className={classes.text_container_item} key={id+i.id}>
                <input type="radio" id={id+i.id} name={id} value={i.value} hidden checked={i.value===selectedValue} onChange={onValueChanged}/>
                <label key={i.id} htmlFor={id+i.id} className={classes.text_label}>
                    <p className={classes.text_label_value}>{i.displayValue}</p>
                </label>
            </div>
        );
        return (
            <div className={classes.text_container} >
                {itemsInputs}
            </div>
        )
    }
}

export default TextAttributeSelector;