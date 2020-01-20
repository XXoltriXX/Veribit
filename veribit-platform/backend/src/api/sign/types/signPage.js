const schema = `
  type SignPage {
    rows: [Sign!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
