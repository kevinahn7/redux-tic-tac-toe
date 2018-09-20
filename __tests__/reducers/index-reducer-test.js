import rootReducer from './../../src/reducers/index';
import historyReducer from './../../src/reducers/history-reducer';
import xIsNextReducer from './../../src/reducers/x-is-next-reducer';
import stepNumberReducer from './../../src/reducers/step-number-reducer';
import { createStore } from 'redux';

const store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      history: [{squares: Array(9).fill(null)}],
      stepNumber: 0,
      xIsNext: true
    });
  });

  test('Should contain historyReducerLogic', () => {
    expect(store.getState().history).toEqual(historyReducer([{squares: Array(9).fill(null)}], { type: null }));
  });

  test('Should contain xIsNextReducer', () => {
    expect(store.getState().xIsNext).toEqual(xIsNextReducer(true, { type: null }));
  });

  test('Should contain stepNumberReducer', () => {
    expect(store.getState().stepNumber).toEqual(stepNumberReducer(0, { type: null}));
  });

});
