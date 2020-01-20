const SignService = require('../../../services/signService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  signDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  signDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.signDestroy);

    await new SignService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
