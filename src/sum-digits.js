const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n ) {
  let arrNums = n.toString().split('')
  function sumStr(arrNums){
    return arrNums.reduce(((curr,acc) => Number(curr) + Number(acc)),0)

  }
  return sumStr(arrNums) <10? sumStr(arrNums): getSumOfDigits(sumStr(arrNums))

}

module.exports = {
  getSumOfDigits
};

