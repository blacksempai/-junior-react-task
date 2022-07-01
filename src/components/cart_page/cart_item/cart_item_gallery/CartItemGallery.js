import classes from './CartItemGallery.module.css';
import { Component } from 'react';
import { ReactComponent as LeftArrowIcon } from './arrow_left.svg';
import { ReactComponent as RightArrowIcon } from './arrow_right.svg';

class CartItemGallery extends Component {

    constructor() {
        super();
        this.state = {
            activePhoto: 0
        }
    }

    nextPhoto = () => {
        if(this.state.activePhoto < this.props.gallery.length - 1) {
            this.setState({ activePhoto: this.state.activePhoto + 1 });
        }
    }

    prevPhoto = () => {
        if(this.state.activePhoto > 0) {
            this.setState({ activePhoto: this.state.activePhoto - 1 });
        }
    }

    render() {
        const { gallery, name } = this.props;
        return (
            <div className={classes.gallery_container}>
                <img src={gallery[this.state.activePhoto]} alt={name} />
                { gallery.length > 1 ?
                <div className={classes.controls_panel}>
                    <button onClick={this.prevPhoto} disabled={this.state.activePhoto === 0}>
                        <LeftArrowIcon/>
                    </button>
                    <button onClick={this.nextPhoto} disabled={this.state.activePhoto === this.props.gallery.length - 1}>
                        <RightArrowIcon/>
                    </button>
                </div> : null
                }
            </div>
        )
    }
}

export default CartItemGallery;