import list from 'modules/share/list/shareListReducers';
import form from 'modules/share/form/shareFormReducers';
import view from 'modules/share/view/shareViewReducers';
import destroy from 'modules/share/destroy/shareDestroyReducers';
import importerReducer from 'modules/share/importer/shareImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
