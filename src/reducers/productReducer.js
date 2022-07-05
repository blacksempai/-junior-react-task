import { fetchProduct } from '../api';

const SET_PRODUCT = 'SET_PRODUCT';
const SET_LOADING = 'SET_LOADING';
const SELECT_ATTRIBUTE_VALUE = 'SELECT_ATTRIBUTE_VALUE';

export const productReducer = (state = {isLoading: false}, action) => {
    switch(action.type) {
        case SET_PRODUCT:
            return {
                isLoading: state.isLoading,
                ...action.product,
                selectedAttributes: {
                    ...action.product?.attributes?.reduce((a, v) => ({...a, [v.name]: v.items[0].value}),{})
                }
            };
        case SET_LOADING: 
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SELECT_ATTRIBUTE_VALUE:
                return {
                    ...state,
                    selectedAttributes: {
                        ...state.selectedAttributes,
                        [action.name]: action.value
                    }
                }
        default:
            return state;
    }
}

export const setProduct = product => ({type: SET_PRODUCT, product});

export const setLoading = isLoading => ({type: SET_LOADING, isLoading});

export const selectAttributeValue = (name, value) => ({type: SELECT_ATTRIBUTE_VALUE, name, value});

export const getProduct = (id) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const { product } = await fetchProduct(id);
        dispatch(setProduct(product));
        dispatch(setLoading(false));
    }
}