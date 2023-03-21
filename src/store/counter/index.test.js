import counterReducer, { increaseCounter } from ".";

test("increaseCounter should return increase action", () => {
  const action = increaseCounter();
  expect(action).toEqual({
    type: "counter/increase",
  });
});

describe("counterReducer", () => {
  it("should return 2 when state is 1 and increase acntion dispatched", () => {
    expect(counterReducer(0, { type: "counter/increase" })).toBe(1);
  });

  it("should return origin state when action is not dispatched", () => {
    expect(counterReducer(2)).toBe(2);
  });
});
