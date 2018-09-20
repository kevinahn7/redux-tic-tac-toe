import historyReducer from './../../src/reducers/history-reducer';

describe("historyReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(historyReducer([{squares: Array(9).fill(null)}], { type: null })).toEqual([{squares: Array(9).fill(null)}]);
  });

  test('Should concat the next squares object to the history array', () => {
    expect(historyReducer(history.length, { type: 'UPDATE_HISTORY' })).toEqual([{squares: Array(9).fill(null)}, {squares: Array(9).fill(null)}])
  })
})
