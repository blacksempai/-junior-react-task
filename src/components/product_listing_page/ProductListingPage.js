import { Component } from 'react';
import ProductCard from './product_card/ProductCard';

class ProductListingPage extends Component {
    render() {
        const { name, products, params, getCategory  } = this.props;
        if(name !== params.name) {
            getCategory(params.name);
        }
        let productComponents = products.map(p => <ProductCard key={p.id} />);
        return (
            <div className='container'>
                <h1>{name}</h1>
                { productComponents }
            </div>
        )
    }
}

export default ProductListingPage;