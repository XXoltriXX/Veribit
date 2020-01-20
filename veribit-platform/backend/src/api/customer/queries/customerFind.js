const CustomerService = require('../../../services/customerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  customerFind(id: String!): Customer!
`;

const resolver = {
  customerFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.customerRead);

    return new CustomerService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
