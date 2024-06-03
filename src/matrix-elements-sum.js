const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],0
 *  [0, 5, 0, 0],1
 *  [2, 0, 3, 3] 2
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let mSum = 0;

  for ( let clmn = 0; clmn<matrix[0].length; clmn++){
    for(let row = 0; row < matrix.length;row++){

      if(matrix[row][clmn] === 0 ){ break}
      else{mSum+=matrix[row][clmn]}

    }
  }
  return mSum;
}

module.exports = {
  getMatrixElementsSum,
};
