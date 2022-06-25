const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';
const SET_IS_MODAL_OPEN = 'SET_IS_MODAL_OPEN'; 
const TOGGLE_MODAL = 'TOGGLE_MODAL'; 

export const cartReducer = (state = {items:[], isModalOpen: false}, action) => {
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
        case SET_IS_MODAL_OPEN: 
            return {
                ...state,
                isModalOpen: action.isModalOpen
            }
        case TOGGLE_MODAL: 
        return {
            ...state,
            isModalOpen: !state.isModalOpen
        }
        default:
            return state;
    }
}

export const addItem = item => ({type: ADD_ITEM, item});

export const removeItem = item => ({type: REMOVE_ITEM, item});

export const clearCart = () => ({type: CLEAR_CART});

export const setIsModalOpen = isModalOpen => ({type: SET_IS_MODAL_OPEN, isModalOpen});

export const toggleModal = () => ({type: TOGGLE_MODAL});