const ProductService = require('../../../services/productService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  productCreate(data: ProductInput!): Product!
`;

const resolver = {
  productCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.productCreate);

    return new ProductService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
