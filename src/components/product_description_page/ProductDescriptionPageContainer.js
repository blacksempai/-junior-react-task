import { connect } from 'react-redux';
import { withRouter } from '../common/hocs/withRouter';
import ProductDescriptionPage from './ProductDescriptionPage';
import { getProduct, selectAttributeValue } from './../../reducers/productReducer';
import { addItem } from '../../reducers/cartReducer'

const mapStateToProps = (state) => {
    return {
        ...state.product,
        selectedCurrency: state.currencies.selectedCurrency,
    }
}

export default connect(mapStateToProps,{getProduct, selectAttributeValue, addItem})(withRouter(ProductDescriptionPage))