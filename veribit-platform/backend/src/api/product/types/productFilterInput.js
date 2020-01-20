const schema = `
  input ProductFilterInput {
    id: String
    name: String
    unitPriceRange: [ Float ]
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
