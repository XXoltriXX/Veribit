const PartnerService = require('../../../services/partnerService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  partnerList(filter: PartnerFilterInput, limit: Int, offset: Int, orderBy: PartnerOrderByEnum): PartnerPage!
`;

const resolver = {
  partnerList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.partnerRead);

    return new PartnerService(context).findAndCountAll({
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
