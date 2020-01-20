const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const PartnerService = require('../../../services/partnerService');

const schema = `
  partnerAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  partnerAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.partnerAutocomplete);

    return new PartnerService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
