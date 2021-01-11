
const encode = str => {
  const arrString = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const digits = ['1', '2', '3', '4', '5'];
  const output = [];

  arrString.forEach(element => {
    let indexDigits = vowels.indexOf(element);
    if (indexDigits >= 0) {
      output.push(digits[indexDigits]);
    }
    else {
      output.push(element);
    }
  })

  return output.join('');
}

const decode = str => {
  const arrString = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const digits = ['1', '2', '3', '4', '5'];
  const output = [];

  arrString.forEach(element => {
    let indexVowels = digits.indexOf(element);
    if (indexVowels >= 0) {
      output.push(vowels[indexVowels]);
    }
    else {
      output.push(element);
    }
  })

  return output.join('');
}

module.exports = {
  encode,
  decode
};
