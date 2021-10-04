import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let max = 0;
  let array = n.toString().split('');
  for(let i = 0; i < array.length; i += 1){
    array.splice(i,1);
    if(parseInt(array.join('')) > max){
      max = parseInt(array.join(''));
    }
    array = n.toString().split('');
  }
  return max;
}
