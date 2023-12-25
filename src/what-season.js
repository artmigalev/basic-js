const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

  const seasons = ['winter', 'spring', 'summer', "autumn"];
  const indSeason = [[11,0,1],[2,3,4],[5,6,7], [8,9,10]];
  if(date === Date.now() || date === new Date(undefined) || date === new Date(null)){
      throw new Error('Invalid date!')
  }

  if (arguments.length === 0 ){
      return'Unable to determine the time of year!'
  }
  if (typeof  date === 'string'){
      const findWord = (element) => {
          const newEl = date;
          return element === newEl.toLowerCase();
      }
          return seasons.find(findWord) === undefined ? 'Invalid date!' : seasons.find(findWord);
  }else {

      if ( date.constructor === Date && date.getMonth() <= 11) {
      const month = date.getMonth();
      for (let i =0 ; i< indSeason.length; i++){
          for( let j = 0; j< indSeason[i].length; j++ ){

              if ( indSeason[i][j] === month ){
                  return seasons[i];
              }
          }
      }
      }else {
               throw new Error('Invalid date!')
          }
  }
}
module.exports = {
  getSeason
};
