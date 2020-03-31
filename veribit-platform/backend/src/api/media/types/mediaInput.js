const schema = `
  input MediaInput {
    txid: String
    files: [ FileInput! ]
    images: [ FileInput! ]
    description: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
