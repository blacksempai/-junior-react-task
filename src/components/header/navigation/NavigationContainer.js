import { connect } from 'react-redux';
import Navigation from './Navigation';
import { getCategories } from './../../../reducers/categoryReducer';

const mapStateToProps = state => ({categories: state.category.categories})

export default connect(mapStateToProps,{getCategories})(Navigation)