const OrderService = require('../../../services/orderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  orderList(filter: OrderFilterInput, limit: Int, offset: Int, orderBy: OrderOrderByEnum): OrderPage!
`;

const resolver = {
  orderList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.orderRead);

    return new OrderService(context).findAndCountAll({
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
