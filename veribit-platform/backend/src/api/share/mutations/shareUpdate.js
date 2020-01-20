const ShareService = require('../../../services/shareService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  shareUpdate(id: String!, data: ShareInput!): Share!
`;

const resolver = {
  shareUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.shareEdit);

    return new ShareService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
