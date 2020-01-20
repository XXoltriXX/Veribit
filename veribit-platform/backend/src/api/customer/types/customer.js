const schema = `
  type Customer {
    id: String!
    name: String
    birthdate: String
    gender: CustomerGenderEnum
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
