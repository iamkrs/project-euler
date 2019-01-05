// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Get multiples of a number (INT or Array of INT's)
let getMultiples = (n, range) => {
  let multiples = new Array();
  let addIfMultiple = (number, multipleBy) => number % multipleBy == 0 ? multiples.push(number) : !1;
  let loopRange = (multipleBy) => {
    for (let i = 0; i < range; i++) addIfMultiple(i, multipleBy)
  };
  (n = !Array.isArray(n) ? [n] : n), n.forEach(i => loopRange(i));
  let onlyUnique = (value, index, self) => self.indexOf(value) === index;
  return multiples.sort((a, b) => a - b).filter(onlyUnique);
};

console.log(getMultiples([3, 5], 1000).reduce((a, b) => a + b, 0));
