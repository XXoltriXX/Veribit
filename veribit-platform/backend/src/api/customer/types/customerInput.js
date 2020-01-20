const schema = `
  input CustomerInput {
    name: String!
    birthdate: String
    gender: CustomerGenderEnum
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
