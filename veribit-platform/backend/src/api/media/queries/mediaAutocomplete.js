const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const MediaService = require('../../../services/mediaService');

const schema = `
  mediaAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  mediaAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.mediaAutocomplete);

    return new MediaService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
