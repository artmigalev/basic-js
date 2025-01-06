const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]));
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  return arr.reduce((acc, el, i) => {
    if (el === '--double-next' && i < arr.length - 1) {
      acc.push(arr[i + 1]);
    }else if(el === '--double-prev' && i > 0){
      acc.push(arr[i - 1]);
    }
     else if (el === '--discard-next' && i > 0) {
      acc.pop();
    }else if(el === '--discard-prev' && i > 0){
      acc.shift();
    }
     else if (el !== '--discard-prev' && el !==  '--discard-next' && el !== '--double-prev' && el !== '--double-next') {
      acc.push(el);
    }
    return acc;
  }, []);
}
module.exports = {
  transform
};

