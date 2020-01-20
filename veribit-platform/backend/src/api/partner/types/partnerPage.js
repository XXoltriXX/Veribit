const schema = `
  type PartnerPage {
    rows: [Partner!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
