const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const OrderService = require('../../../services/orderService');

const schema = `
  orderAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  orderAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.orderAutocomplete);

    return new OrderService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
