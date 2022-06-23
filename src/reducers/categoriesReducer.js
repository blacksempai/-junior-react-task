import { client } from '@tilework/opus';
import { categoriesQuery } from '../queries/categories';

const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_LOADING = 'SET_LOADING';

let initialState = {
    categories: [],
    isLoading: false
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default: 
            return state;
    }
}

export const setCategories = categories => ({type: SET_CATEGORIES, categories});

export const setLoading = isLoading => ({type: SET_LOADING, isLoading});

export const getCategories = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const data = await client.post(categoriesQuery);
        dispatch(setCategories(data.categories));
        dispatch(setLoading(false));
    }
}