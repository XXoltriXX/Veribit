const ShareService = require('../../../services/shareService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  shareDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  shareDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.shareDestroy);

    await new ShareService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
