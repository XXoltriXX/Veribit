const ProductService = require('../../../services/productService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  productFind(id: String!): Product!
`;

const resolver = {
  productFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.productRead);

    return new ProductService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
