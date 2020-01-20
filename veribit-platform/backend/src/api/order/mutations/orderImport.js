const OrderService = require('../../../services/orderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  orderImport(data: OrderInput!, importHash: String!): Boolean
`;

const resolver = {
  orderImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.orderImport);

    await new OrderService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
