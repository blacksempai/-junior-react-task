import { client } from '@tilework/opus';
import { currenciesQuery } from '../queries/currencies';

const SET_CURRENCIES = 'SET_CURRENCIES';
const SELECT_CURRENCY = 'SELECT_CURRENCY';

let initialState = {
    selectedCurrency: {
        label: '',
        symbol: ''
    },
    currencies: []
}

export const currenciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCIES: 
            return {
                ...state,
                currencies: action.currencies
            }
        case SELECT_CURRENCY: 
        return {
            ...state,
            selectedCurrency: action.selectedCurrency
        }
        default: 
            return state;
    }
}

export const setCurrencies = currencies => ({type: SET_CURRENCIES, currencies});

export const selectCurrency = selectedCurrency => ({type: SELECT_CURRENCY, selectedCurrency});

export const getCurrencies = () => {
    return async (dispatch) => {
        const data = await client.post(currenciesQuery);
        dispatch(setCurrencies(data.currencies));
        dispatch(selectCurrency(data.currencies[0]));
    }
}
