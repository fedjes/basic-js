const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if(Array.isArray(array)=== false) { 
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  if (array.length === 0 ) {
    return array;
  }
  let newArr = [...array];
  for(let i = 0; i < newArr.length; i++) {
    if(newArr[i] === "--double-next") {
      console.log(newArr[i]);
      newArr[i] = newArr[i + 1];
      console.log('ell ' + newArr[i]);
    }
  
    if(newArr[i] === "--double-prev") {
      newArr[i] = newArr[i - 1];
      console.log('ell ' + newArr[i]);
    }
  
  if (newArr[i] === '--discard-next') {
      newArr[i] = null;
      newArr[i +1] = null;
      console.log('ell ' + newArr[i]);
  }
  if (newArr[i] === '--discard-prev') {
    newArr[i] = null;
    newArr[i -1] = null;
    console.log('ell ' + newArr[i]);
  }
  if(newArr[i] === undefined) {
    newArr[i] = null;
  }
  }
  return newArr.filter(el => el !== null);
  
  
  }

module.exports = {
  transform
};
