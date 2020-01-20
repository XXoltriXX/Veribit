const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const ProductService = require('../../../services/productService');

const schema = `
  productAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  productAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.productAutocomplete);

    return new ProductService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
