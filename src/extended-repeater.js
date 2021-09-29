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
  let repetition = options.repeatTimes;
  let stringSeparator = options.separator; // +
  let separatorAddition = options.addition;
  let addRepetition = options.additionRepeatTimes;
  let repSeparator = options.additionSeparator; // |

  if(options.separator == undefined){
    stringSeparator = '+';
  }
  if(options.additionSeparator == undefined){
    repSeparator = '|';
  }
  if(options.addition == undefined){
    separatorAddition = '';
  }
  if(options.additionRepeatTimes == undefined){
    addRepetition = 1;
  }

  let repeated = '';
  let completeSeparator = '';

  completeSeparator = completeSeparator.concat((separatorAddition + repSeparator).repeat(addRepetition - 1) + separatorAddition);
  // console.log(`Complete separator is : ${completeSeparator}`);

  repeated = repeated.concat((str.toString() + completeSeparator + stringSeparator).repeat(repetition - 1) + (str.toString() + completeSeparator));
  // console.log(`Repeated stuff is ${repeated}`);

  return repeated;
}
