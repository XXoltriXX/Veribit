const schema = `
  input MediaFilterInput {
    id: String
    txid: String
    description: String
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
