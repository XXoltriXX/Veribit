const schema = `
  enum AppsOrderByEnum {
    id_ASC
    id_DESC
    novi_ASC
    novi_DESC
    levo_ASC
    levo_DESC
    nosco_ASC
    nosco_DESC
    scio_ASC
    scio_DESC
    disco_ASC
    disco_DESC
    indicium_ASC
    indicium_DESC
    specto_ASC
    specto_DESC
    intelligo_ASC
    intelligo_DESC
    teneo_ASC
    teneo_DESC
    percipio_ASC
    percipio_DESC
    antikythera_ASC
    antikythera_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
