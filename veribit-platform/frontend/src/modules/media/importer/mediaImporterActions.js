import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/media/importer/mediaImporterSelectors';
import MediaService from 'modules/media/mediaService';
import fields from 'modules/media/importer/mediaImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'MEDIA_IMPORTER',
  selectors,
  MediaService.import,
  fields,
  i18n('entities.media.importer.fileName'),
);
