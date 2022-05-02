const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let domainsObject = {};

  for (let i = 0; i < domains.length; i++) {
    const splitted = domains[i].split('.');
    const splittedReversed = splitted.reverse();
    const splittedReversedWithDots = splittedReversed.map(item => {
      return '.' + item;
    })

    splittedReversedWithDots.reduce((curr, concatValue) => {
      let currentDns = curr + concatValue;

    if (domainsObject[currentDns]) {
        domainsObject[currentDns]++;
      } else {
        domainsObject[currentDns] = 1;
      }

    return currentDns;

    }, '')
  }

  return domainsObject;
}

module.exports = {
  getDNSStats
};
