const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusOneIndexesArray = [];

  for (let i = 0; i < arr.length; i++) {
  if (arr[i] === -1) {
      minusOneIndexesArray.push(i);
    }
  }

  const newArrayToSort = arr.filter(item => item !== -1);
  const newSortedArray = newArrayToSort.sort((leftItem, rightItem) => leftItem - rightItem);

  for (let i = 0; i < minusOneIndexesArray.length; i++) {
  newSortedArray.splice(minusOneIndexesArray[i], 0, -1);
  }

  return newSortedArray;
}

module.exports = {
  sortByHeight
};
