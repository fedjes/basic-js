const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(catsArray) {
  let catsCounter = 0;
  let catsFlattedArray =  catsArray.flat();
  for(let i = 0; i < catsFlattedArray.length; i++) {
     if(catsFlattedArray[i] === '^^') {
      catsCounter += 1;
     }
    }
  return catsCounter;
}

module.exports = {
  countCats
};
