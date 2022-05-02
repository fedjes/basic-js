const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let set = [

  ]

  s1.split('');
  s2.split('');

  let arrLength = 0;
  (s1.length >= s2.length) ? arrLength = s1.length : arrLength = s2.length

  for (let i = 0; i < arrLength; i++) {

    if (s1.length > i) {
      let finder = false;
      for (let index = 0; index < set.length; index++) {

        if (set[index].char === s1[i]) {
          set[index].countOfNumb1++;
          finder = true;
          break;
        }
      }
      if (finder === false) {
        console.log(s1[i]);
        set.push({
          char: s1[i],
          countOfNumb1: 1,
          countOfNumb2: 0
        })
      }
    }

    if (s2.length > i) {
      let finder = false;
      for (let index = 0; index < set.length; index++) {

        if (set[index].char === s2[i]) {
          set[index].countOfNumb2++;
          finder = true;
          break;
        }
      }
      if (finder === false) {
        console.log(s2[i]);
        set.push({
          char: s2[i],
          countOfNumb1: 0,
          countOfNumb2: 1
        })
      }
    }

  }

  // console.log(set);
  // for(let i = 0; i < set.length; i++) {
  //   (set[i].countOfNumb1 < set[i].countOfNumb2) ? result += set[i].countOfNumb1 : result += set[i].countOfNumb2
    
  // }
  set.forEach(el =>{
    el.countOfNumb1 < el.countOfNumb2 ? result += el.countOfNumb1 : result += el.countOfNumb2;
  })
  console.log(+result);
  return +result;

}

module.exports = {
  getCommonCharacterCount
};
