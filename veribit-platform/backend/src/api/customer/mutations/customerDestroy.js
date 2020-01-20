const CustomerService = require('../../../services/customerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  customerDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  customerDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.customerDestroy);

    await new CustomerService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
