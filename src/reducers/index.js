import { combineReducers } from 'redux';
import { helloWorldReducer } from './helloWorld';

const rootReducer = combineReducers({
  helloWorldReducer
});

export default rootReducer;
