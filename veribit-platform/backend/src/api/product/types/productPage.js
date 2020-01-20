const schema = `
  type ProductPage {
    rows: [Product!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
