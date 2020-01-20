const schema = `
  input ProductInput {
    name: String!
    description: String
    unitPrice: Float!
    photos: [ FileInput! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
