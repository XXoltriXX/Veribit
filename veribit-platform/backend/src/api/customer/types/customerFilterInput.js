const schema = `
  input CustomerFilterInput {
    id: String
    name: String
    birthdateRange: [ String ]
    gender: CustomerGenderEnum
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
