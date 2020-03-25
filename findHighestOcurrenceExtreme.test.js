const highestOccurrence = require("./findHighestOcurrence");

test("TEST - there is a zero problem in your solution, perhaps there is a statement taking zero as a falsey value", () => {
  expect(highestOccurrence([0,1]).sort()).toStrictEqual([0,1].sort())
});

test("TEST - Should have got a string as an element of the array", () => {
  expect(highestOccurrence(["1","2","2"])).toStrictEqual(["2"])
});

test("TEST - this is a cruel one, make sure that parseInt doesn't affect strings that start with digits", () => {
  expect(highestOccurrence(["3a","2a","3a"])).toStrictEqual(["3a"])
});

test("TEST - if there is a tie for highest occurrence, both should be returned in the array", () => {
  expect(highestOccurrence(["a","a","b","b"].sort())).toStrictEqual(["a","b"].sort())
});

test("TEST - numbers should be returned as numbers", () => {
  expect(highestOccurrence([1,"a","b","b"])).toStrictEqual(["b"])
});

test("TEST - NaN is a number too - and a relative", () => {
  expect(highestOccurrence([NaN,"a","b","b"])).toStrictEqual(["b"])
});

test("TEST - strings should work with this function", () => {
  expect(highestOccurrence(["a"])).toStrictEqual(["a"])
});
