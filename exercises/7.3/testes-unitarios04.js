const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(30), 'fizzbuzz', 'não é divisivel por 3 e 5');

assert.strictEqual(myFizzBuzz(12), 'fizz', 'não é divisivel apenas por 3');

assert.strictEqual(myFizzBuzz(10), 'buzz', 'não é divisivel apenas por 5');

assert.strictEqual(myFizzBuzz(13), 13, 'divisivel por 3, por 5 ou pelos dois');

assert.strictEqual(myFizzBuzz('NaN'), false, 'um não numero retorna true');
