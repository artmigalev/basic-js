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
  let objDomain = {}
  for( dom of domains){
    let key = []
    dom = dom.split('.')
    for(let i = dom.length -1; i >= 0; i--){
      let value = 0
      key.unshift(dom[i])


      if (Object.keys(objDomain).length === 0){
        domains.forEach((url) => url.includes(dom[i]) ? value++ : false )
        objDomain[`.${dom[i]}`] = value
      }
      else if(!objDomain.hasOwnProperty(`.${key.join('.')}`)){
        domains.forEach((url) => (url.includes(key.join('.')) ? value++ : false));

        objDomain[`.${key.reverse().join('.')}`] = value
        key.reverse()

      }
      console.log(key.join('.'));


    }



  }
  return objDomain

}

module.exports = {
  getDNSStats
};

