const ShareService = require('../../../services/shareService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  shareCreate(data: ShareInput!): Share!
`;

const resolver = {
  shareCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.shareCreate);

    return new ShareService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
