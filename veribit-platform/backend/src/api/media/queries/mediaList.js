const MediaService = require('../../../services/mediaService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  mediaList(filter: MediaFilterInput, limit: Int, offset: Int, orderBy: MediaOrderByEnum): MediaPage!
`;

const resolver = {
  mediaList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.mediaRead);

    return new MediaService(context).findAndCountAll({
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
