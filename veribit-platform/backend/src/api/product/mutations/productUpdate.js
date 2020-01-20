const ProductService = require('../../../services/productService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  productUpdate(id: String!, data: ProductInput!): Product!
`;

const resolver = {
  productUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.productEdit);

    return new ProductService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
