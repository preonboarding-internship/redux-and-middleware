// RED
//
//
// sum

const sum = (x, y) => x + y;

test("sum 2,2 => 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("sum 3,3 => 6", () => {
  expect(sum(3, 3)).toBe(6);
});
