const schema = `
  input AppsFilterInput {
    id: String
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
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
