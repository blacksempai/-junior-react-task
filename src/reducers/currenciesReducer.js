import { client } from '@tilework/opus';
import { currenciesQuery } from '../queries/currencies';

const SET_CURRENCIES = 'SET_CURRENCIES';
const SELECT_CURRENCY = 'SELECT_CURRENCY';
const SET_LOADING = 'SET_LOADING';

let initialState = {
    selectedCurrency: {
        symbol: '',
        label: ''
    },
    currencies: [],
    isLoading: false
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
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default: 
            return state;
    }
}

export const setCurrencies = currencies => ({type: SET_CURRENCIES, currencies});

export const selectCurrency = selectedCurrency => ({type: SELECT_CURRENCY, selectedCurrency});

export const setLoading = isLoading => ({type: SET_LOADING, isLoading});

export const getCurrencies = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const data = await client.post(currenciesQuery);
        dispatch(setCurrencies(data.currencies));
        dispatch(selectCurrency(data.currencies[0]));
        dispatch(setLoading(false));
    }
}
