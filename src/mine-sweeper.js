const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper (matrix ) {
  const lines = matrix.length;
  const rows = matrix[0].length;

  let newArray = new Array(lines);
  newArray.fill(0);
  newArray = newArray.map(item => new Array(rows).fill(0))

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      // top item
      if (i > 0) {

        // top left
        if (j > 0) {
        if (matrix[i - 1][j - 1]) {
            newArray[i][j] += 1
          }
        }

        // top top item
        if (matrix[i - 1][j]) {
          newArray[i][j] += 1
        }

        // top right item
        if (j < matrix[i].length - 1) {
        if (matrix[i - 1][j + 1]) {
            newArray[i][j] += 1
          }
        }

      }

      // right item
        if (j < matrix[i].length - 1) {
      if (matrix[i][j + 1]) {
          newArray[i][j] += 1
        }
      }

      // bottom item
      if (i < matrix.length - 1) {

        //bottom left item
        if (j > 0) {
          if (matrix[i + 1][j - 1]) {
            newArray[i][j] += 1
          }
        }

        // bottom bottom item
          if (matrix[i + 1][j]) {
          newArray[i][j] += 1
        }

        // bottom right item
         if (j < matrix[i].length - 1) {
          if (matrix[i + 1][j + 1]) {
            newArray[i][j] += 1
          }
        }
      }

      // left item 
      if (j > 0) {
        if (matrix[i][j - 1]) {
          newArray[i][j] += 1;
        }
      }

    }

  }

  return newArray;

}

module.exports = {
  minesweeper
};
