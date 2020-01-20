const MediaService = require('../../../services/mediaService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  mediaDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  mediaDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.mediaDestroy);

    await new MediaService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
