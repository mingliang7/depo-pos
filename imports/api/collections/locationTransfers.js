export const LocationTransfers = new Mongo.Collection('locationTransfers');
export const LocationTransferDetails = new Mongo.Collection('locationTransferDetail');
LocationTransfers.schema = new SimpleSchema({
    locationtransferDate: {
        type: Date
    },
    staffId: {
        type: String
    },
    fromLocationId: {
        type: String
    },
    toLocationId: {
        type: String
    },
    status: {
        type: String
    },
    description: {
        type: String,
        optional: true
    }
})

LocationTransferDetails.schema = new SimpleSchema({
    locationTranferId: {
        type: Date
    },
    itemId: {
        type: String
    },
    fromLocationId: {
        type: String
    },
    toLocationId: {
        type: String
    },
    quantity: {
        type: Number,
        decimal: true
    },
    costPrice: {
        type: Number,
        decimal: true
    },
    status: {
      type: String
    },
})
LocationTransfers.attachSchema(LocationTransfers.schema);
LocationTransferDetails.attachSchema(LocationTransferDetails.schema);
