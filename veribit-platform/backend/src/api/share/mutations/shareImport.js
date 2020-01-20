const ShareService = require('../../../services/shareService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  shareImport(data: ShareInput!, importHash: String!): Boolean
`;

const resolver = {
  shareImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.shareImport);

    await new ShareService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
