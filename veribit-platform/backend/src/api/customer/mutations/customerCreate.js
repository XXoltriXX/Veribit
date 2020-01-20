const CustomerService = require('../../../services/customerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  customerCreate(data: CustomerInput!): Customer!
`;

const resolver = {
  customerCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.customerCreate);

    return new CustomerService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
