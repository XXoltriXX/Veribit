const MediaService = require('../../../services/mediaService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  mediaFind(id: String!): Media!
`;

const resolver = {
  mediaFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.mediaRead);

    return new MediaService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
