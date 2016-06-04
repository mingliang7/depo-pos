export const Items = new Mongo.Collection('items');

Items.schema = new SimpleSchema({
    name: {
        type: String
    },
    barcode: {
        type: String
    },
    unitId: {
        type: String,
    },
    sellingUnit: {
        type: [Object]
    },
    'sellingUnit.$.unitId': {
        type: String
    },
    categoryId: {
        type: String
    },
    picture: {
        type: String,
        optional: true
    },
    retailPrice: {
        type: Number,
        decimal: true
    },
    wholesalePrice: {
        type: Number,
        decimal: true
    },
    itemType: {
        type: String,
    },
    status: {
        type: String,
    },
    accountId: {
        type: String
    }
})

Items.attachSchema(Items.schema);
