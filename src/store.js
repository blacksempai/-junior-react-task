import { configureStore } from "@reduxjs/toolkit";
import { currenciesReducer } from './reducers/currenciesReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { categoryReducer } from './reducers/categoryReducer';

const store = configureStore({
    reducer: {
        currencies: currenciesReducer,
        categories: categoriesReducer,
        category: categoryReducer
    }
});

export default store;