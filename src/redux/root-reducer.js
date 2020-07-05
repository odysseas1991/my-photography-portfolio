import { combineReducers } from 'redux';

import dropdownReducer from './dropdown/dropdown.reducer';
import directoryReducer from './directory/directory.reducer';
import projectsReducer from './projects/projects.reducer';

export default combineReducers({
  dropdown: dropdownReducer,
  directory: directoryReducer,
  projectsCollection: projectsReducer,
});
