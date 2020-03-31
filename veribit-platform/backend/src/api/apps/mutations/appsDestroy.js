const AppsService = require('../../../services/appsService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  appsDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  appsDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.appsDestroy);

    await new AppsService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
