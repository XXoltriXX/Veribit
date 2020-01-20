import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/sign/importer/signImporterSelectors';
import SignService from 'modules/sign/signService';
import fields from 'modules/sign/importer/signImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'SIGN_IMPORTER',
  selectors,
  SignService.import,
  fields,
  i18n('entities.sign.importer.fileName'),
);
