import { NotImplementedError } from '../extensions/index.js';

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
 */
export default function repeater(str, options) {
  let repetition = new String(options.repeatTimes);
  let stringSeparator = new String(options.separator); // +
  let separatorAddition = new String(options.addition);
  let addRepetition = new String(options.additionRepeatTimes);
  let repSeparator = new String(options.additionSeparator); // |

  if(options.separator == undefined){
    stringSeparator = '+';
  }
  if(options.additionSeparator == undefined){
    repSeparator = '|';
  }
  if(options.addition == undefined && options.addition !== null){
    separatorAddition = '';
  }
  if(options.additionRepeatTimes == undefined){
    addRepetition = 1;
  }

  let repeated = '';
  let completeSeparator = '';

  completeSeparator = completeSeparator.concat((separatorAddition + repSeparator).repeat(addRepetition - 1) + separatorAddition);
  // console.log(`Complete separator is : ${completeSeparator}`);

  repeated = repeated.concat((new String(str) + completeSeparator + stringSeparator).repeat(repetition - 1) + (new String(str) + completeSeparator));
  // console.log(`Repeated stuff is ${repeated}`);

  return repeated;
}
