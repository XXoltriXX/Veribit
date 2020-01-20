const OrderService = require('../../../services/orderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  orderUpdate(id: String!, data: OrderInput!): Order!
`;

const resolver = {
  orderUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.orderEdit);

    return new OrderService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
