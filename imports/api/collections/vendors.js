export const Vendors = new Mongo.Collection('vendors');
Vendors.schema = new SimpleSchema({
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
    vendorType: {
        type: String
    }
    //term, group
    ,
    creditLimit: {
        type: Number,
        decimal: true
    }
})
Vendors.attachSchema(Vendors.schema);
