import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let result = [];
  let array = [];
  let count = [];
  let countNum = 1;
  let strSplit = str.split('');
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i+1] === strSplit[i]){
      countNum += 1;
    }
    if(strSplit[i+1] !== strSplit[i]){
      array.push(strSplit[i]);
      count.push(countNum);
      countNum = 1;
    }
  }
  for(let i = 0; i < array.length; i++){
    if(count[i] === 1){
      result.push(`${array[i]}`);
    }
    if(count[i] > 1){
      result.push(`${count[i]}${array[i]}`);
    }
  }
  return result.join('');
}
