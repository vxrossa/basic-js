import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  let month = date.getMonth();
  if(month >= 0 && month <= 1){
    return "winter";
  }
  if(month > 1 && month <= 4){
    return "spring";
  }
  if(month > 4 && month <= 7){
    return "summer";
  }
  if(month > 7 && month <= 10){
    return "autumn";
  }
  if(month == 11){
    return "winter";
  }
}
