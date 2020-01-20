const MediaService = require('../../../services/mediaService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  mediaCreate(data: MediaInput!): Media!
`;

const resolver = {
  mediaCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.mediaCreate);

    return new MediaService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
