import { client } from '@tilework/opus';
import { categoriesQuery } from '../queries/categories';

const SET_CATEGORIES = 'SET_CATEGORIES';

let initialState = {
    categories: []
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        default: 
            return state;
    }
}

export const setCategories = categories => ({type: SET_CATEGORIES, categories});

export const getCategories = () => {
    return async (dispatch) => {
        const data = await client.post(categoriesQuery);
        dispatch(setCategories(data.categories));
    }
}