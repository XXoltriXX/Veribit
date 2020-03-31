const schema = `
  input SignInput {
    txid: String
    documents: [ FileInput! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
