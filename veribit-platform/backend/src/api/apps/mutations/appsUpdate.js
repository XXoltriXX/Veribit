const AppsService = require('../../../services/appsService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  appsUpdate(id: String!, data: AppsInput!): Apps!
`;

const resolver = {
  appsUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.appsEdit);

    return new AppsService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
