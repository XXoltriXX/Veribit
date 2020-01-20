const OrderService = require('../../../services/orderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  orderDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  orderDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.orderDestroy);

    await new OrderService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
