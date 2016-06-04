export const Sales = new Mongo.Collection('sales');
Sales.schema = new SimpleSchema({
    voucher: {
        type: String
    },
    saleDate: {
        type: Date
    },
    status: {
        type: String
    },
    customerId: {
        type: String
    },
    staffId: {
        type: String
    },
    description: {
        type: String
    },
    exchangeRateId: {
        type: String
    },
    subTotal: {
        type: Number,
        decimal: true
    },
    total: {
        type: Number,
        decimal: true
    },
    discount: {
        type: Number,
        decimal: true
    },
    tax: {
        type: Number,
        decimal: true
    },
    owedAmount: {
        type: Number,
        decimal: true
    },
    totalCost: {
        type: Number,
        decimal: true
    },
    locationId: {
        type: String
    },
    isRetail: {
        type: Boolean
    },
    saleDetail: {
        type: [Object]
    },
    'saleDetail.$.itemId': {
        type: String
    },
    'saleDetail.$.price': {
        type: Number,
        decimal: true
    },
    'saleDetail.$.quantity': {
        type: Number,
        decimal: true
    },
    'saleDetail.$.discount': {
        type: Number,
        decimal: true
    },
    'saleDetail.$.amount': {
        type: Number,
        decimal: true
    },
    'saleDetail.$.costPrice': {
        type: Number,
        decimal: true
    },
    'saleDetail.$.totalCost': {
        type: Number,
        decimal: true
    },
    'saleDetail.$.isPromotion': {
        type: Boolean
    },
    'saleDetail.$.promotionFromProductId': {
        type: String,
    },
    'saleDetail.$.locationId': {
        type: String
    },
})
Sales.attachSchema(Sales.schema)
