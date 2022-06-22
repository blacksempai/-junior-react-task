import classes from './AttributeSelector.module.css';
import { Component } from 'react';
import ColorAttributeSelector from './color_attribute_selector/ColorAttributeSelector';
import SizeAttributeSelector from './size_attribute_selector/SizeAttributeSelector';
import TextAttributeSelector from './text_attribute_selector/TextAttributeSelector';


class AttributeSelector extends Component {
    render() {
        const { id, name, type, items } = this.props.attribute;

        switch(type) {
            case 'swatch': 
                switch(name){
                    case 'Color': 
                        return <ColorAttributeSelector {...this.props.attribute}/>;
                    case 'Size':
                        return <SizeAttributeSelector {...this.props.attribute}/>;
                    default:
                        return null;
                }
            case 'text':
                return <TextAttributeSelector {...this.props.attribute}/>;
            default:
                return null;   
        }
    }
}

export default AttributeSelector;