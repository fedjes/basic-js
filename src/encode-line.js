const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let result = "";

  let f = str.split('');
  // console.log(f[f.length-1]);s

  let count = 1;
  let befor = "";

  // b b c c a 

  for (let i = 0; i < f.length; i++) {
    
    if (befor === f[i]) {
      count++;
      if(f.length-1 === i){
        result = result + count + befor;
        
      }
      // console.log("Q");
    }
    else if (count === 1) {
      result += befor;
      befor = f[i];
      if(f.length-1 === i){
        result += befor;        
      }
      // console.log("W");
    }
    else {
      result = result + count + befor;
      count = 1;
      befor = f[i];
      // console.log("E");
      if(f.length-1 === i){
        result += befor;        
      }


    }    
    console.log(result);
  }


   return result;
}

module.exports = {
  encodeLine
};
