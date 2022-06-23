import classes from './ColorAttributeSelector.module.css';
import { Component } from 'react';


class ColorAttributeSelector extends Component {
    render() {
        const { id, items, onValueChanged, selectedValue } = this.props;
        const itemsInputs = items.map(i => 
            <div key={id+i.id}>
                <input type="radio" id={id+i.id} name={id} value={i.value} hidden checked={i.value===selectedValue} onChange={onValueChanged}/>
                <label key={i.id} htmlFor={id+i.id} style={{background: i.value}}
                    className={i.value==='#FFFFFF' ? classes.color_label + ' ' + classes.border : classes.color_label}></label>
            </div>
        );
        return (
            <div className={classes.color_container}  onChange={onValueChanged} >
                {itemsInputs}
            </div>
        )
    }
}

export default ColorAttributeSelector;