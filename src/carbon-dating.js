import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string'){
    return false;
  }
  if(sampleActivity >= MODERN_ACTIVITY){
    return false;
  }
  if(sampleActivity == ""){
    return false;
  }
  if(sampleActivity <= 0){
    return false;
  }
  if(sampleActivity == null){
    return false;
  }
  if(isNaN(parseFloat(sampleActivity))){
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let answer = 0;
  answer = Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/Math.log(Math.E)) / k);
  if(typeof answer == "NaN"){
    return false;
  } else{
    return answer;
  }
}
