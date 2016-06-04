export const Staffs = new Mongo.Collection('staffs');

Staffs.schema = new SimpleSchema({
    name: {
        type: String
    },
    startDate: {
        type: Date,
    },
    gender: {
        type: String
    },
    position: {
        type: String
    },
    salary: {
        type: Number,
        decimal: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    status: {
        type: String
    }
});

Staffs.attachSchema(Staffs.schema);
