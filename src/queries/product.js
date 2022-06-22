import { Query, Field } from '@tilework/opus';

const productFields = [ 'id', 'name', 'inStock', 'gallery', 'description', 'category', 'brand'  ];

export const getProductQuery = (id) => {
    return new Query('product')
        .addArgument('id', 'String!', id)
        .addFieldList(productFields)
        .addField(new Field('attributes', true)
            .addFieldList(['id','name','type'])
            .addField(new Field('items', true)
                .addFieldList(['id','displayValue','value'])
            )
        )
        .addField(new Field('prices', true)
            .addField('amount')
            .addField(new Field('currency')
                .addFieldList(['label','symbol'])
            )
        )
}