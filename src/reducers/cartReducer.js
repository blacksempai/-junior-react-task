
const SET_CART = 'SET_CART';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

export const cartReducer = (state = {items:[]}, action) => {
    switch(action.type) {
        case SET_CART:
            return action.cart;
        case ADD_ITEM: 
            return {
                items: [...state.items, ]
            } 
        default:
            return state;
    }
}