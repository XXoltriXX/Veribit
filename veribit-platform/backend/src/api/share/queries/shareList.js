const ShareService = require('../../../services/shareService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  shareList(filter: ShareFilterInput, limit: Int, offset: Int, orderBy: ShareOrderByEnum): SharePage!
`;

const resolver = {
  shareList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.shareRead);

    return new ShareService(context).findAndCountAll({
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
