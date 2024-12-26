const route = require('color-convert/route.js');
const { NotImplementedError } = require('../extensions/index.js');
const { FAILSAFE_SCHEMA } = require('js-yaml');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  let rows = matrix.length
  let result =[]
  function cheking( matrix,row,ind){
    let totalNumMines =0;
    // if(matrix[row][ind] === true ) totalNumMines++ ;
    if(matrix[row][ind-1] === true && ind-1 >= 0) totalNumMines++
    if(matrix[row] [ind+1] === true && ind+1 < matrix[row].length) totalNumMines++
    if(row-1 >=  0){
      if(matrix[row-1][ind] === true)  totalNumMines++
     if( matrix[row-1][ind-1] === true && ind-1 >= 0) totalNumMines++
      if(matrix[row-1] [ind+1] === true && ind+1 < matrix[row].length) totalNumMines++
    }else if(row+1 <  matrix.length){
      if(matrix[row+1][ind] === true ) totalNumMines++
      if(matrix[row+1][ind-1] === true && ind-1 >= 0) totalNumMines++
     if( matrix[row+1] [ind+1] === true && ind+1 < matrix[row].length) totalNumMines++
    }
    return totalNumMines;
  }
  for(let r = 0; r < rows; r++){
    const resultMines =[]
    for(let clm =0; clm < matrix[r].length; clm++){

      resultMines.push(cheking(matrix,r,clm))
    }
    result.push(resultMines)
  }
  return result;
}

module.exports = {
  minesweeper
};

