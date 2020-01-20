const MediaService = require('../../../services/mediaService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  mediaUpdate(id: String!, data: MediaInput!): Media!
`;

const resolver = {
  mediaUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.mediaEdit);

    return new MediaService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
