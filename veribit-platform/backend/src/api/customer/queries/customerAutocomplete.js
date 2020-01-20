const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const CustomerService = require('../../../services/customerService');

const schema = `
  customerAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  customerAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.customerAutocomplete);

    return new CustomerService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
