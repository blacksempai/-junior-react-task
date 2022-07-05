import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductListingPageContainer from './components/product_listing_page/ProductListingPageContainer';
import ProductDescriptionPageContainer from './components/product_description_page/ProductDescriptionPageContainer';
import CartPageContainer from './components/cart_page/CartPageContainer'

class Router extends Component {
    render() {
        const { categories, isDropdownOpen } = this.props;
        if(!categories?.length) {
            return null;
        }
        const defaultURL = '/category/' + categories[0].name;
        return (
            <div className={ isDropdownOpen ? 'shadowed' : '' }>
                <Routes>
                    <Route path='/category/:name' element={<ProductListingPageContainer/>}/>
                    <Route path='/product/:id' element={<ProductDescriptionPageContainer/>}/>
                    <Route path='/cart' element={<CartPageContainer/>}/>
                    <Route path='*' element={<Navigate to={defaultURL}/>}/>
                </Routes>
            </div>
        )
    }
}

const mapStateToProps = state =>
 ({categories: state.categories.categories, isDropdownOpen: state.cart.isDropdownOpen})

export default connect(mapStateToProps)(Router)