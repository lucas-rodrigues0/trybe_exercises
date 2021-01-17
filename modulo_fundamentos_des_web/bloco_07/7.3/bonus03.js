const assert = require('assert');
// escreva a função removeMiddle aqui

const removeMiddle = arr => {
  let output = [];
  let middle = Math.floor(arr.length / 2)
  output.push(arr[middle]);
  arr.splice(middle, 1);
  return output;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);