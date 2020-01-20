const PartnerService = require('../../../services/partnerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  partnerUpdate(id: String!, data: PartnerInput!): Partner!
`;

const resolver = {
  partnerUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.partnerEdit);

    return new PartnerService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
