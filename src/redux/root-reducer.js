import { combineReducers } from 'redux';

import dropdownReducer from './dropdown/dropdown.reducer';

export default combineReducers({
  dropdown: dropdownReducer,
});
