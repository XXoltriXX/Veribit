import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/partner/importer/partnerImporterSelectors';
import PartnerService from 'modules/partner/partnerService';
import fields from 'modules/partner/importer/partnerImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'PARTNER_IMPORTER',
  selectors,
  PartnerService.import,
  fields,
  i18n('entities.partner.importer.fileName'),
);
