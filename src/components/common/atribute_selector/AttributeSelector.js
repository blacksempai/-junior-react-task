import classes from './AttributeSelector.module.css';
import { Component } from 'react';
import ColorAttributeSelector from './color_attribute_selector/ColorAttributeSelector';
import TextAttributeSelector from './text_attribute_selector/TextAttributeSelector';


class AttributeSelector extends Component {
    render() {
        const { id, name, type, items } = this.props.attribute;
        switch(type) {
            case 'swatch': 
                switch(name){
                    case 'Color': 
                        return <ColorAttributeSelector {...this.props.attribute}
                         selectedValue={this.props.selectedValue}
                         onValueChanged={this.props.onValueChanged}/>;
                    default:
                        return null;
                }
            case 'text':
                return <TextAttributeSelector {...this.props.attribute}
                    selectedValue={this.props.selectedValue}
                    onValueChanged={this.props.onValueChanged}/>;
            default:
                return null;   
        }
    }
}

export default AttributeSelector;