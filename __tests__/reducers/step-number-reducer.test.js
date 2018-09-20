import stepNumberReducer from './../../src/reducers/step-number-reducer';

describe("stepNumberReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(stepNumberReducer({}, { type: null })).toEqual({});
  });

})
