const SignService = require('../../../services/signService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  signImport(data: SignInput!, importHash: String!): Boolean
`;

const resolver = {
  signImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.signImport);

    await new SignService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
