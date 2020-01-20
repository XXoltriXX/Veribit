const schema = `
  type SharePage {
    rows: [Share!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
