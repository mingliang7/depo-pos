export const BillPayments = new Mongo.Collection('billPayments')
BillPayments.schema = new SimpleSchema({
    billId: {
        type: String
    },
    paymentDate: {
        type: Date
    },
    paidAmount: {
        type: Number,
        decimal: true
    },
    owedAmount: {
        type: Number,
        decimal: true
    },
    balanceAmount: {
        type: Number,
        decimal: true
    },
    vendorId: {
        type: String
    },
    staffId:{
      type: String
    },
    status: {
        type: String
    }
})
BillPayments.attachSchema(BillPayments.schema)
