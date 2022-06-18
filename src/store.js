import { configureStore } from "@reduxjs/toolkit";
import { currencyReducer } from './reducers/currencyReducer';
import { categoryReducer } from './reducers/categoryReducer';

const store = configureStore({
    reducer: {
        currency: currencyReducer,
        category: categoryReducer
    }
});

export default store;