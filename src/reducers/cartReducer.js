const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';
const SET_IS_CART_DROPDOWN_OPEN = 'SET_IS_CART_DROPDOWN_OPEN'; 

export const cartReducer = (state = {items:[], isDropdownOpen: false}, action) => {
    let item;
    switch(action.type) {
        case ADD_ITEM:
            item = state.items.find(i => i.id === action.item.id);
            if(item) {
                return {
                    ...state,
                    items: state.items.map(i => i.id === item.id ? {...i, count: i.count+1} : i)
                }
            }
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case REMOVE_ITEM:
            item = state.items.find(i => i.id === action.item.id);
            if(item?.count > 1) {
                return {
                    ...state,
                    items: state.items.map(i => i.id === item.id ? {...i, count: i.count-1} : i)
                }
            }
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.item.id)
            }
        case CLEAR_CART: 
            return {
                ...state,
                items: []
            }
        case SET_IS_CART_DROPDOWN_OPEN: 
            return {
                ...state,
                isDropdownOpen: action.isDropdownOpen
            }
        default:
            return state;
    }
}

export const addItem = item => ({type: ADD_ITEM, item});

export const removeItem = item => ({type: REMOVE_ITEM, item});

export const clearCart = () => ({type: CLEAR_CART});

export const setIsDropdownOpen = isDropdownOpen => ({type: SET_IS_CART_DROPDOWN_OPEN, isDropdownOpen});