import { combineReducers } from 'redux';
import authSlice from './slices/authSlice';
import initSlice from './slices/initSlice';

const rootReducer = combineReducers({
  init: initSlice,
  auth: authSlice,
});

export default (state, action) => rootReducer(action.type === 'logout' ? undefined : state, action);
