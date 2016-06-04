export const StockLocations = new SimpleSchema('stockLocations');

StockLocations.schema = new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  }
})
StockLocations.attachSchema(StockLocations.schema);
