const SignService = require('../../../services/signService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  signList(filter: SignFilterInput, limit: Int, offset: Int, orderBy: SignOrderByEnum): SignPage!
`;

const resolver = {
  signList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.signRead);

    return new SignService(context).findAndCountAll({
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
