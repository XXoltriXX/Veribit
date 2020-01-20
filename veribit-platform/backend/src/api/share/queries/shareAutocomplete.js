const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const ShareService = require('../../../services/shareService');

const schema = `
  shareAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  shareAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.shareAutocomplete);

    return new ShareService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
