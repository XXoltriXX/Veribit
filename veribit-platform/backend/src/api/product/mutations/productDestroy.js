const ProductService = require('../../../services/productService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  productDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  productDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.productDestroy);

    await new ProductService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
