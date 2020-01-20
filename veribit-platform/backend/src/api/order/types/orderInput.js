const schema = `
  input OrderInput {
    customer: String!
    products: [ String! ]!
    employee: String
    delivered: Boolean
    attachments: [ FileInput! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
