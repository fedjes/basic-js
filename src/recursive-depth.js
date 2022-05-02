const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array, deepIndex = 1) {
    let currentMaxDeep = deepIndex;
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let itemDeep = this.calculateDepth(array[i], deepIndex + 1);
      if (itemDeep > currentMaxDeep) {
          currentMaxDeep = itemDeep;
        }
      }
    }
    
    return currentMaxDeep
  }
}

module.exports = {
  DepthCalculator
};
