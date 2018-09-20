import stepNumberReducer from './../../src/reducers/step-number-reducer';

describe("stepNumberReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(stepNumberReducer({}, { type: null })).toEqual({});
  });

  test("Should update state number", () => {
    expect(stepNumberReducer({}, { type: 'UPDATE_STEP_NUMBER', stepNumber: 2})).toEqual(2);
  })
})
