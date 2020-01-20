import list from 'modules/sign/list/signListReducers';
import form from 'modules/sign/form/signFormReducers';
import view from 'modules/sign/view/signViewReducers';
import destroy from 'modules/sign/destroy/signDestroyReducers';
import importerReducer from 'modules/sign/importer/signImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
