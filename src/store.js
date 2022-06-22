import { configureStore } from "@reduxjs/toolkit";
import { currenciesReducer } from './reducers/currenciesReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { productReducer } from './reducers/productReducer';

const store = configureStore({
    reducer: {
        currencies: currenciesReducer,
        categories: categoriesReducer,
        category: categoryReducer,
        product: productReducer
    }
});

export default store;