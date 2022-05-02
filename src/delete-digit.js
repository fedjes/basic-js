const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( digit ) {
  let biggest = 0;
  let stringDigit = `${digit}`;

  for (let i = 0; i < stringDigit.length; i++) {
    let numberAsArray = stringDigit.split('');
    numberAsArray.splice(i, 1);

    let newNumber = parseInt(numberAsArray.join(''))

  if (newNumber > biggest) {
      biggest = newNumber;
    }
  }

  return biggest;
}

module.exports = {
  deleteDigit
};
