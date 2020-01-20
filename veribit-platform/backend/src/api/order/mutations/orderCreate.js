const OrderService = require('../../../services/orderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  orderCreate(data: OrderInput!): Order!
`;

const resolver = {
  orderCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.orderCreate);

    return new OrderService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
