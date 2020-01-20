const schema = `
  input SignFilterInput {
    id: String
    txid: String
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
