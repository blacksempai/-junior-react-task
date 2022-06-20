import { Component } from 'react';
import classes from './App.module.css';
import Header from './components/header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductListingPageContainer from './components/product_listing_page/ProductListingPageContainer';


class App extends Component {
    render() {
        return (
            <div className={classes.app}>
                <Header/>
                <Routes>
                    <Route path="/category/:name" element={<ProductListingPageContainer/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;