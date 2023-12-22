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
}function encodeLine(str) {
  let resultStr = '';
  let char = str[0]
  let count = 0;
  for( let i = 0; i<= str.length; i++){
      if( char === str[i]){
          count++;

      }else {
          if ( count <= 1){
              resultStr +=char;
              char = str[i];
              count =0;
          }else {
              resultStr = resultStr + count + char;
              char = str[i];
              count =0;
          }
          count++

      }
  }
  return resultStr;

}

module.exports = {
  encodeLine
};
