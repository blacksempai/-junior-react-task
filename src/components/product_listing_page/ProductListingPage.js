import { Component } from 'react';
import ProductCard from './product_card/ProductCard';

class ProductListingPage extends Component {

    componentDidUpdate() {
        this.props.getCategory(this.props.params.name);
    }

    render() {
        const { name, products } = this.props;
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