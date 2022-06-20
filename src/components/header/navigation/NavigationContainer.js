import { connect } from 'react-redux';
import Navigation from './Navigation';
import { getCategories } from '../../../reducers/categoriesReducer';

const mapStateToProps = state => ({categories: state.categories.categories})

export default connect(mapStateToProps,{getCategories})(Navigation)