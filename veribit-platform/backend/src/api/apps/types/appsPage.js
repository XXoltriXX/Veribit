const schema = `
  type AppsPage {
    rows: [Apps!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
