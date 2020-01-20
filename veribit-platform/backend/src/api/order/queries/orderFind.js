const OrderService = require('../../../services/orderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  orderFind(id: String!): Order!
`;

const resolver = {
  orderFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.orderRead);

    return new OrderService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
