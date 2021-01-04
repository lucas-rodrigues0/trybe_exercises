const assert = require('assert')

// escreva sum abaixo
const sum = (...num) => {
  return num.reduce((acc, elem) => acc += elem, 0);
};

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)
