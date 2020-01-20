const PartnerService = require('../../../services/partnerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  partnerImport(data: PartnerInput!, importHash: String!): Boolean
`;

const resolver = {
  partnerImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.partnerImport);

    await new PartnerService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
