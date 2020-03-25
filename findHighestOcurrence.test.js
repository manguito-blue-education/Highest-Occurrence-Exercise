const highestOccurrence = require("./findHighestOcurrence");

test("TEST", () => {
  expect(highestOccurrence(["a","a"])).toStrictEqual(["a"])
});

test("TEST", () => {
  expect(highestOccurrence(["a","a","b"])).toStrictEqual(["a"])
});

test("TEST", () => {
  expect(highestOccurrence(["a","a","b"])).toStrictEqual(["a"])
});

test("TEST", () => {
  expect(highestOccurrence(["hearts","diamonds","diamonds","spades","spades","clubs"].sort())).toStrictEqual(["diamonds","spades"].sort());
}) 

test("TEST", () => {
  expect(highestOccurrence([1,2,2,3,3,3,4,4,4,4])).toStrictEqual([4])
});

test("TEST", () => {
  expect(highestOccurrence(["ab","ab","b"])).toStrictEqual(["ab"])
});

test("TEST", () => {
  expect(highestOccurrence(["ab","ab","b","bb","b"].sort())).toStrictEqual(["b","ab"].sort())
});

test("TEST", () => {
  expect(highestOccurrence([3,3,3,4,4,4,4,2,3,6,7,6,7,6,7,6,"a","a","a","a"].sort())).toStrictEqual([3,4,6,"a"].sort())
});

test("TEST", () => {
  expect(highestOccurrence(["ab","ab","b","bb","b"].sort())).toStrictEqual(["b","ab"].sort())
});

test("TEST", () => {
  expect(highestOccurrence([2,2,"2","2",4,4].sort())).toStrictEqual([2,"2",4].sort())
});
