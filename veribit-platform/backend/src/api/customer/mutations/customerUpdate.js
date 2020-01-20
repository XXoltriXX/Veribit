const CustomerService = require('../../../services/customerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  customerUpdate(id: String!, data: CustomerInput!): Customer!
`;

const resolver = {
  customerUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.customerEdit);

    return new CustomerService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
