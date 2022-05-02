const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let repeatedItem = `${str}`;

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (i === options.additionRepeatTimes - 1) {
      repeatedItem += `${options.addition ? options.addition : ''}`
    } else {
      repeatedItem += `${options.addition ? options.addition : ''}${additionSeparator}`
    }
  }

  let result = '';

  if (options.repeatTimes) {

  for (let i = 0; i < options.repeatTimes; i++) {
    if (i === options.repeatTimes - 1) {
      result += `${repeatedItem}`;
    } else {
      result += `${repeatedItem}${separator}`;
    }
   
    }
  };

  return result;
}

module.exports = {
  repeater
};
