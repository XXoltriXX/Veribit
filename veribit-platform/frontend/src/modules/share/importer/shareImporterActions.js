import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/share/importer/shareImporterSelectors';
import ShareService from 'modules/share/shareService';
import fields from 'modules/share/importer/shareImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'SHARE_IMPORTER',
  selectors,
  ShareService.import,
  fields,
  i18n('entities.share.importer.fileName'),
);
