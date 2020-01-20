const schema = `
  type MediaPage {
    rows: [Media!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
