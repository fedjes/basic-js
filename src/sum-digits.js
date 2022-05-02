const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {

let numberToString = `${number}`;
let eachNumberSeparate = numberToString.split('');
let allNumbers = eachNumberSeparate.map(item => parseInt(item));

  let counter = 0;

  for (let i = 0; i < allNumbers.length; i++) {
    counter += allNumbers[i];
  }

  if (`${counter}`.length >= 2) {
    return getSumOfDigits(`${counter}`);
  } else {
    return counter;
  }
}

module.exports = {
  getSumOfDigits
};
