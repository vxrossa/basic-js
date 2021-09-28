import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let nums = [];
  for(let e = 0; e < matrix.length; e++){
    for(let i = 0; i < matrix[e].length; i++){
      if(e == 0 && matrix[e][i] > 0){
        nums.push(matrix[e][i]);
      }
      if(e > 0 && matrix[e][i] > 0 && matrix[e-1][i] > 0){
        nums.push(matrix[e][i]);
      }
    }
  }
  return nums.reduce((sum,a) => sum+a,0);
}

