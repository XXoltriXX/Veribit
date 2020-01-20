const SignService = require('../../../services/signService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  signUpdate(id: String!, data: SignInput!): Sign!
`;

const resolver = {
  signUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.signEdit);

    return new SignService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
