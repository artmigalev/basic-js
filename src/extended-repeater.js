const { string } = require('yargs');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 *
 */
function repeater( str, options ) {
  let resultRepeat = Array(options.additionRepeatTimes).fill(options.addition === null ? String(options.addition): options.addition).join(options.additionSeparator ? options.additionSeparator : '|')
  return Array(options.repeatTimes).fill(String(str).concat(resultRepeat)).join(options.separator ? options.separator: '+')
}



module.exports = {
  repeater
};


// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 })'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION');
