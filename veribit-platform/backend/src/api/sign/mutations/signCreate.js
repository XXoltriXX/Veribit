const SignService = require('../../../services/signService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  signCreate(data: SignInput!): Sign!
`;

const resolver = {
  signCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.signCreate);

    return new SignService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
