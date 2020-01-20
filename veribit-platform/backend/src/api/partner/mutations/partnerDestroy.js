const PartnerService = require('../../../services/partnerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  partnerDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  partnerDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.partnerDestroy);

    await new PartnerService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
