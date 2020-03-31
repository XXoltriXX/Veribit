const schema = `
  input PartnerInput {
    txid: String
    list: [ String! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
