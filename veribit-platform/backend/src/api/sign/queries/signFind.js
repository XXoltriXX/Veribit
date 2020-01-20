const SignService = require('../../../services/signService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  signFind(id: String!): Sign!
`;

const resolver = {
  signFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.signRead);

    return new SignService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
