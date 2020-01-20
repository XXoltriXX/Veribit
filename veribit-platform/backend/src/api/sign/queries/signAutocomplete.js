const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const SignService = require('../../../services/signService');

const schema = `
  signAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  signAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.signAutocomplete);

    return new SignService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
