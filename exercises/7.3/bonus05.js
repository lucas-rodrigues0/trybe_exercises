const assert = require('assert');

const Verify = password => {
  if (password === null) {
    throw new Error('Password should not be null');
    return false
  }

  let arr = [];
  for (let i = 0; i < password.length; i += 1) {
    if (password[i] >= 0) {
      arr.push(parseInt(password[i]));
    } else {
      arr.push(password[i]);
    }
  }

  let upperCase = false;
  let lowerCase = false;
  let num = false;

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'string' && arr[i] == arr[i].toUpperCase()) {
      upperCase = true;
    }
    if (typeof arr[i] === 'string' && arr[i] == arr[i].toLowerCase()) {
      lowerCase = true;
    }
    if (arr[i] >= 0) {
      num = true;
    }
  }

  if (password.length < 8) {
    throw new Error('Password should be larger than 8 characters');
    return false;
  }
  if (upperCase === false) {
    throw new Error('Password should have one uppercase letter at least');
    return false
  }
  if (lowerCase === false) {
    throw new Error('Password should have one lowercase letter at least');
    return false    
  }
  if (num  === false) {
    throw new Error('Password should have one number at least');
    return false       
  }

  return true
}

const erro1 = '1234567';
const erro2 = null;
const erro3 = 'minuscula0'
const erro4 = 'MAIUSCULA0'
const erro5 = 'SenhaSemNum'
const senha = 'SenhaOk1'
const result = true;

 assert.strictEqual(Verify(senha), result);
// assert.strictEqual(Verify(erro1), result);
// assert.strictEqual(Verify(erro2), result);
// assert.strictEqual(Verify(erro3), result);
// assert.strictEqual(Verify(erro4), result);
// assert.strictEqual(Verify(erro5), result);
