import { client } from '@tilework/opus';
import { currenciesQuery } from './queries/currencies';
import { categoriesQuery } from './queries/categories';
import { getCategoryQuery } from './queries/category';
import { getProductQuery } from './queries/product';

const inMemoryCache = new Map();

export const fetchCurrencies = () => {
    return fetchDataWithCache(currenciesQuery);
}

export const fetchCategories = () => {
    return fetchDataWithCache(categoriesQuery);
}

export const fetchCategory = (title) => {
    return fetchDataWithCache(getCategoryQuery(title));
}

export const fetchProduct = (id) => {
    return fetchDataWithCache(getProductQuery(id));
}

const fetchDataWithCache = async (query) => {
    const uid = getQueryUID(query);
    if(inMemoryCache.has(uid)) {
        return inMemoryCache.get(uid)
    }
    const data = await client.post(query);
    inMemoryCache.set(uid, data);
    return data;
}

const getQueryUID = (query) => {
    return query.name + query.args.reduce((p, c) => p + Object.values(c.value), '');
}