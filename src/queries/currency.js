import { Query } from "@tilework/opus";

export const currenciesQuery = new Query('currencies', true)
    .addField('label')
    .addField('symbol');