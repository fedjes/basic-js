const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const repeatingFileNames = {};

  for (let i = 0; i < names.length; i++) {
    if (repeatingFileNames[names[i]]) {
      let index = repeatingFileNames[names[i]];
      repeatingFileNames[names[i]] += 1;
      names[i] = `${names[i]}(${index})`
      repeatingFileNames[names[i]] = 1;
    } else {
      repeatingFileNames[names[i]] = 1
    }
  }

  return names;
}

module.exports = {
  renameFiles
};
