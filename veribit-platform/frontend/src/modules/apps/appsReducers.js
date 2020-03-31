import list from 'modules/apps/list/appsListReducers';
import form from 'modules/apps/form/appsFormReducers';
import view from 'modules/apps/view/appsViewReducers';
import destroy from 'modules/apps/destroy/appsDestroyReducers';
import importerReducer from 'modules/apps/importer/appsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
