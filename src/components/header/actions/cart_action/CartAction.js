import { Component } from 'react';
import { ReactComponent as CartIcon } from './cart.svg'
import classes from './CartAction.module.css'
import CartOverlay from './cart_overlay/CartOverlay';

class CartAction extends Component {

    closeCartDropdown = () => {
        this.props.setIsDropdownOpen(false);   
    }

    toggleCartDropdown = () => {
        this.props.setIsDropdownOpen(!this.props.isDropdownOpen);   
    }

    componentDidUpdate() {
        setTimeout(() => {
            if(this.props.isDropdownOpen) {
                document.addEventListener('click', this.closeCartDropdown);
            }
            else {
                document.removeEventListener('click', this.closeCartDropdown);
            }
        }, 0)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeCartDropdown);
    }

    render() {
        const count = this.props.items.reduce((p,c) => p + c.count, 0);
        return (
            <div>
                <button ref={this.cartBtnRef} className={classes.btn} onClick={this.toggleCartDropdown}>
                    <CartIcon/>
                    { count ? <span className={classes.count}>{count}</span> : null}
                </button>
                <CartOverlay {...this.props} count={count}/>
            </div>
        )
    }
}

export default CartAction;