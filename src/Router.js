import { Component } from "react";
import { connect } from 'react-redux';
import ProductListingPageContainer from "./components/product_listing_page/ProductListingPageContainer";
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductDescriptionPageContainer from "./components/product_description_page/ProductDescriptionPageContainer";

class Router extends Component {
    render() {
        const { categories } = this.props;
        if(!categories.length) {
            return null;
        }
        const defaultURL = '/category/' + categories[0].name;
        return (
            <Routes>
                <Route path='/category/:name' element={<ProductListingPageContainer/>}/>
                <Route path='/product/:id' element={<ProductDescriptionPageContainer/>}/>
                <Route path='*' element={<Navigate to={defaultURL}/>}/>
            </Routes>
        )
    }
}

export default connect(state => ({categories: state.categories.categories}))(Router)