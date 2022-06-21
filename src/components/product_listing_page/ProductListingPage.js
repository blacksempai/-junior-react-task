import classes from './ProductListingPage.module.css';
import { Component } from 'react';
import ProductCard from './product_card/ProductCard';
import Loader from './../common/loader/Loader';

class ProductListingPage extends Component {
    render() {
        const { name, products, params, getCategory, selectedCurrency } = this.props;
        if(name !== params.name) {
            getCategory(params.name);
            return <Loader/>;
        }
        let productComponents = products.map(p => <ProductCard key={p.id} {...p} selectedCurrency={selectedCurrency}/>);
        return (
            <div className='container '>
                <h1 className={classes.name}>{name}</h1>
                <div className={classes.products_grid}>
                    { productComponents }
                </div>
            </div>
        )
    }
}

export default ProductListingPage;