import { Query, Field } from '@tilework/opus';

export const getCategoryQuery = (title) => {
    return new Query('category')
        .addArgument('input', 'CategoryInput', {title})
        .addField('name')
        .addField(new Field('products', true)
            .addFieldList(['id', 'name', 'inStock', 'gallery'])
            .addField(new Field('prices', true)
                .addField('amount')
                .addField(new Field('currency')
                    .addField('label')
                )
            )
        )
}