const CustomerService = require('../../../services/customerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  customerList(filter: CustomerFilterInput, limit: Int, offset: Int, orderBy: CustomerOrderByEnum): CustomerPage!
`;

const resolver = {
  customerList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.customerRead);

    return new CustomerService(context).findAndCountAll({
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
