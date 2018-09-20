import xIsNextReducer from './../../src/reducers/x-is-next-reducer';

describe("xIsNextReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(xIsNextReducer({}, { type: null })).toEqual({});
  });

  test("Should switch value of X", () => {
    expect(xIsNextReducer({}, { type: 'NEXT_TURN', stepNumber: 3})).toEqual({ xIsNext: false })
  })
})
