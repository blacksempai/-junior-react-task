import { fetchCategory } from '../api';

const SET_CATEGORY = 'SET_CATEGORY';

let initialState = {
    name: '',
    products: []
}

export const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORY:
            return action.category
            
        default: 
            return state;
    }
}

export const setCategory = category => ({type: SET_CATEGORY, category})

export const getCategory = (title) => {
    return async (dispatch) => {
        let { category } = await fetchCategory(title);
        dispatch(setCategory(category));
    }
}