import { client } from '@tilework/opus';
import { getProductQuery } from './../queries/product';
const SET_PRODUCT = 'SET_PRODUCT';
const SET_LOADING = 'SET_LOADING';

export const productReducer = (state = {isLoading: true}, action) => {
    switch(action.type) {
        case SET_PRODUCT:
            return {
                isLoading: state.isLoading,
                ...action.product
            };
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state;
    }
}

export const setProduct = product => ({type: SET_PRODUCT, product});

export const setLoading = isLoading => ({type: SET_LOADING, isLoading});

export const getProduct = (id) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const { product } = await client.post(getProductQuery(id))
        dispatch(setProduct(product));
        dispatch(setLoading(false));
    }
}