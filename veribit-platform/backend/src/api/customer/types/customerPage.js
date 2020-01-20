const schema = `
  type CustomerPage {
    rows: [Customer!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
