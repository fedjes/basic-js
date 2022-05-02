const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(namesArray) {
  let filtredArray;
  let teamName = [];
  let result = '';
  console.log('is array - ', Array.isArray(namesArray));
  if (!Array.isArray(namesArray)) {
      return false
  };
  filtredArray = namesArray;
  for (let i = 0; i < filtredArray.length; i++) {
      if (typeof filtredArray[i] === 'string') {
          teamName.push(filtredArray[i].trim()[0].toUpperCase());
      }
  }
  teamName.sort((a, b) => a.localeCompare(b));
  result = teamName.join('');
  console.log(result);
  return result;

}

module.exports = {
  createDreamTeam
};
