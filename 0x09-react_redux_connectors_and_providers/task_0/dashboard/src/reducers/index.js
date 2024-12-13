// dashboard/src/reducers/index.js

import { combineReducers } from 'redux';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  uiReducer, // Add other reducers here
});

export default rootReducer;

