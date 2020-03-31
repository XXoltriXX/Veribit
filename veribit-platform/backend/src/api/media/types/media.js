const schema = `
  type Media {
    id: String!
    txid: String
    files: [ File! ]
    images: [ File! ]
    description: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
