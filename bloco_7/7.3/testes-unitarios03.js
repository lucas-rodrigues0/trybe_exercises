const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
let arr = [1, 2, 3, 4];

const unchanged = [1, 2, 3, 4];

const expected =  myRemoveWithoutCopy(arr, 3);

assert.deepStrictEqual(expected, [1, 2, 4], 'não retira o elemento de valor 3');

assert.notStrictEqual(expected, unchanged, 'retorna valor inicial do array');

assert.strictEqual(expected, arr, 'array inicial não modificou');

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'parametro não pertence ao array');