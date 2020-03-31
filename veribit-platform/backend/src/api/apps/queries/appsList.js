const AppsService = require('../../../services/appsService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  appsList(filter: AppsFilterInput, limit: Int, offset: Int, orderBy: AppsOrderByEnum): AppsPage!
`;

const resolver = {
  appsList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.appsRead);

    return new AppsService(context).findAndCountAll({
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
