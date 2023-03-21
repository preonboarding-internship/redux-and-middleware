// counter.test.js
//

import counterReducer, { INCREASE, increaseCounter } from ".";

// unit test
test("increaseCounter should return increase action object", () => {
  expect(increaseCounter()).toEqual({ type: "counter/increase" });
});

describe("counterReducer", () => {
  it("should return 2 when prevState is 1 and action is increaseAction", () => {
    const result = counterReducer(1, { type: INCREASE });

    expect(result).toBe(2);
  });

  it("should return prevState when action is not provided", () => {
    const prevState = 10;

    const result = counterReducer(prevState);

    expect(result).toBe(prevState);
  });
});
