const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
let arr = [1, 2, 3, 4];

const unchanged = [1, 2, 3, 4];

const expected = myRemove(arr, 3);

assert.deepStrictEqual(expected, [1, 2, 4], 'não retira o elemento de valor 3');

assert.notStrictEqual(expected, unchanged, 'não retira o elemento de valor 3');

assert.deepStrictEqual(arr, unchanged, 'modifica o array original');

assert.deepStrictEqual(myRemove(arr, 5), [1, 2, 3, 4], 'parametro não pertence ao array');