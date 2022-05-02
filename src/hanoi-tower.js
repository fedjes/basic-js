const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi( disksNumber, turnsSpeed ) {
  let resultObject = {
    turns: null,
    seconds: null
  };
let actionPerSecond = turnsSpeed / 3600 ;

//min value turn actions
  resultObject.turns = Math.pow(2, disksNumber) - 1;
  resultObject.seconds = Math.floor(resultObject.turns / actionPerSecond);
  console.log(resultObject);
  return resultObject;
}

module.exports = {
  calculateHanoi
};
