import { client } from '@tilework/opus';
import { getCategoryQuery } from '../queries/category';

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
        let { category } = await client.post(getCategoryQuery(title));
        dispatch(setCategory(category));
    }
}