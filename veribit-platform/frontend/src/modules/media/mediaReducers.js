import list from 'modules/media/list/mediaListReducers';
import form from 'modules/media/form/mediaFormReducers';
import view from 'modules/media/view/mediaViewReducers';
import destroy from 'modules/media/destroy/mediaDestroyReducers';
import importerReducer from 'modules/media/importer/mediaImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
