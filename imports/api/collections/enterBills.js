export const EnterBills = new Mongo.Collection('enterBills')
EnterBills.schema = new SimpleSchema({
    voucher: {
        type: String
    },
    billDate: {
        type: Date
    },
    status: {
        type: String
    },
    vendorId: {
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
    locationId: {
        type: String
    },
    type: {
        type: String
    },
    dueDate: {
        type: Date,
        optional: true
    },
    isReceived: Boolean,
    classId: {
        type: String,
        optional: true
    },
    enterBillsDetail: {
        type: [Object]
    },
    'enterBillsDetail.$.itemId': {
        type: String
    },
    'enterBillsDetail.$.price': {
        type: Number,
        decimal: true
    },
    'enterBillsDetail.$.qauntity': {
        type: Number,
        decimal: true
    },
    'enterBillsDetail.$.discount': {
        type: Number,
        decimal: true,
        optional: true
    },
    'enterBillsDetail.$.amount': {
        type: Number,
        decimal: true
    },
    'enterBillsDetail.$.locationId': {
        type: String
    }

})
EnterBills.attachSchema(EnterBills.schema);
