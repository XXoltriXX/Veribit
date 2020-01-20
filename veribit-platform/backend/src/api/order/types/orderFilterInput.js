const schema = `
  input OrderFilterInput {
    id: String
    customer: String
    employee: String
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
