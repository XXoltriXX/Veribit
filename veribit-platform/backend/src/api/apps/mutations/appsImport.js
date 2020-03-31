const AppsService = require('../../../services/appsService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  appsImport(data: AppsInput!, importHash: String!): Boolean
`;

const resolver = {
  appsImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.appsImport);

    await new AppsService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
