const ProductService = require('../../../services/productService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  productImport(data: ProductInput!, importHash: String!): Boolean
`;

const resolver = {
  productImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.productImport);

    await new ProductService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
