export const Categories = new Mongo.Collection('categories');

Categories.schema = new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  parentId: {
    type: String,
    optional: true
  }
})


Categories.attachSchema(Categories.schema);
