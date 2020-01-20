const schema = `
  type Product {
    id: String!
    name: String
    description: String
    unitPrice: Float
    photos: [ File! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
