const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const AppsService = require('../../../services/appsService');

const schema = `
  appsAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  appsAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.appsAutocomplete);

    return new AppsService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
