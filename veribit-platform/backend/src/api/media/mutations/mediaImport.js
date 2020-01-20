const MediaService = require('../../../services/mediaService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  mediaImport(data: MediaInput!, importHash: String!): Boolean
`;

const resolver = {
  mediaImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.mediaImport);

    await new MediaService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
