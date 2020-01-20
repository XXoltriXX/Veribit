import list from 'modules/partner/list/partnerListReducers';
import form from 'modules/partner/form/partnerFormReducers';
import view from 'modules/partner/view/partnerViewReducers';
import destroy from 'modules/partner/destroy/partnerDestroyReducers';
import importerReducer from 'modules/partner/importer/partnerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
