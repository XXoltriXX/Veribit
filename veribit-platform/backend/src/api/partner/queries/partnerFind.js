const PartnerService = require('../../../services/partnerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  partnerFind(id: String!): Partner!
`;

const resolver = {
  partnerFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.partnerRead);

    return new PartnerService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
