import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
      let maxDepth = 1;

      for(let i = 0; i < arr.length; i++){
        let curDepth = 1;
        if(Array.isArray(arr[i])){
          curDepth += this.calculateDepth(arr[i]);
        }
        if(curDepth > maxDepth){
          maxDepth = curDepth;
        }
      }
    return maxDepth;
  }
}

// let array = [1[2,3,5],[5,5]];

// function calcDepth(arr){
//   return Array.isArray(arr) ? 1 + Math.max(...arr.map(cal))
// }