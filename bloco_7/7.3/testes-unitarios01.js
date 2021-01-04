const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const expected01 = sum(4, 5);

const expected02 = sum(0, 0);

const expected03 = sum(4, '5');

assert.strictEqual(expected01, 9);

assert.strictEqual(expected02, 0);

// assert.strictEqual(expected03, 9);

// assert.throws(() => {
//   sum(4, '5');
// });