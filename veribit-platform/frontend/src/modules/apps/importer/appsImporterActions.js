import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/apps/importer/appsImporterSelectors';
import AppsService from 'modules/apps/appsService';
import fields from 'modules/apps/importer/appsImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'APPS_IMPORTER',
  selectors,
  AppsService.import,
  fields,
  i18n('entities.apps.importer.fileName'),
);
