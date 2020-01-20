const schema = `
  type OrderPage {
    rows: [Order!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
