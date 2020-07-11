import { combineReducers } from 'redux';

import dropdownReducer from './dropdown/dropdown.reducer';
import projectsReducer from './projects/projects.reducer';

export default combineReducers({
  dropdown: dropdownReducer,
  projectsCollection: projectsReducer,
});
