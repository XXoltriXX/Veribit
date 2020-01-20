const ShareService = require('../../../services/shareService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  shareFind(id: String!): Share!
`;

const resolver = {
  shareFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.shareRead);

    return new ShareService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
