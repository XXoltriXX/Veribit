const AppsService = require('../../../services/appsService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  appsCreate(data: AppsInput!): Apps!
`;

const resolver = {
  appsCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.appsCreate);

    return new AppsService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
