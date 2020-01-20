const ProductService = require('../../../services/productService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  productList(filter: ProductFilterInput, limit: Int, offset: Int, orderBy: ProductOrderByEnum): ProductPage!
`;

const resolver = {
  productList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.productRead);

    return new ProductService(context).findAndCountAll({
      ...args,
      requestedAttributes: graphqlSelectRequestedAttributes(
        info,
        'rows',
      ),
    });
  },
};

exports.schema = schema;
exports.resolver = resolver;
