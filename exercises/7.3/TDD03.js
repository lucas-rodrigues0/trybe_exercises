const assert = require('assert');
// escreva a função addAllnumbers aqui

const addAllnumbers = (arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i += 1) {
    num += arr[i];
  }
  return num;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);