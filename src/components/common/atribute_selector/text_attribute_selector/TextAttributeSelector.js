import classes from './TextAttributeSelector.module.css';
import { Component } from 'react';


class TextAttributeSelector extends Component {
    render() {
        const { id, items } = this.props;
        const itemsInputs = items.map(i => 
            <label key={i.id} htmlFor={i.id}>
                <input type="radio" id={i.id} name={id} value={i.value}/>
                {i.displayValue}
            </label>
        );
        return (
            <div>
                {itemsInputs}
            </div>
        )
    }
}

export default TextAttributeSelector;