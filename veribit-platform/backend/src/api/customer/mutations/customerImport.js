const CustomerService = require('../../../services/customerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  customerImport(data: CustomerInput!, importHash: String!): Boolean
`;

const resolver = {
  customerImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.customerImport);

    await new CustomerService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
