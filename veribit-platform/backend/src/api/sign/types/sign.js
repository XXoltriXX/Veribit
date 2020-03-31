const schema = `
  type Sign {
    id: String!
    txid: String
    documents: [ File! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
