const schema = `
  type Apps {
    id: String!
    novi: String
    levo: String
    nosco: String
    scio: String
    disco: String
    indicium: String
    specto: String
    intelligo: String
    teneo: String
    percipio: String
    antikythera: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
