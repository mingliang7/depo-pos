export const Customers = new Mongo.Collection('customers');
Customers.schema = new SimpleSchema({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    termId: {
        type: String
    },
    repId: {
        type: String
    },
    customerType: {
        type: String
    }
    //term, group
    ,
    creditLimit: {
        type: Number,
        decimal: true
    }
})
Customers.attachSchema(Customers.schema);
