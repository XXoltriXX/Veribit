const schema = `
  enum MediaOrderByEnum {
    id_ASC
    id_DESC
    txid_ASC
    txid_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
