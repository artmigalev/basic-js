const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  if(matrix.length>0) {
      for( let i =0; i< matrix.length; i++) {
          const arrEl = matrix[i];
          for (let el = 0; el < arrEl.length; el++){
              if( arrEl[el] === '^^'){
                  count++;
              }
          }
      }
  }
  return count;
}

module.exports = {
  countCats
};
