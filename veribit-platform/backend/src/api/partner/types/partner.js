const schema = `
  type Partner {
    id: String!
    txid: String
    list: [ User! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
