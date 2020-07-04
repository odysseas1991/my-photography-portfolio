import { combineReducers } from 'redux';

import dropdownReducer from './dropdown/dropdown.reducer';
import directoryReducer from './directory/directory.reducer';

export default combineReducers({
  dropdown: dropdownReducer,
  directory: directoryReducer,
});
