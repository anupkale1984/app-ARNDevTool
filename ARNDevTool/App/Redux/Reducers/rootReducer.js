import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducers = combineReducers({
  app: appReducer,
});

export default rootReducers;
