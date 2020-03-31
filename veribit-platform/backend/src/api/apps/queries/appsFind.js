const AppsService = require('../../../services/appsService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  appsFind(id: String!): Apps!
`;

const resolver = {
  appsFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.appsRead);

    return new AppsService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
