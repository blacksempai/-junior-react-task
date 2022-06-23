import { configureStore } from "@reduxjs/toolkit";
import { currenciesReducer } from './reducers/currenciesReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { loadState, saveState } from './browser-storage';

const store = configureStore({
    reducer: {
        currencies: currenciesReducer,
        categories: categoriesReducer,
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer
    },
    preloadedState: loadState() || {}
});

store.subscribe(()=>{
    saveState(store.getState());
})

export default store;