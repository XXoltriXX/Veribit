const PartnerService = require('../../../services/partnerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  partnerCreate(data: PartnerInput!): Partner!
`;

const resolver = {
  partnerCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.partnerCreate);

    return new PartnerService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
