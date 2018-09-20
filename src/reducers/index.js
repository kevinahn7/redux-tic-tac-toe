import xIsNextReducer from './x-is-next-reducer';
import stepNumberReducer from './step-number-reducer';
import historyReducer from './history-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  history: historyReducer,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer
});

export default rootReducer;
