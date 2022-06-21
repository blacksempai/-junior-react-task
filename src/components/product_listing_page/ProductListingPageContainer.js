import { connect } from 'react-redux';
import { getCategory } from '../../reducers/categoryReducer';
import ProductListingPage from './ProductListingPage';
import { withRouter } from '../../hocs/withRouter'

const mapStateToProps = (state) => {
    return {
        products: state.category.products,
        name: state.category.name,
        selectedCurrency: state.currencies.selectedCurrency
    }
}

export default connect(mapStateToProps, {getCategory})(withRouter(ProductListingPage));