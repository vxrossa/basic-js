import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let arrTransform = [];
  for(let i = 0; i < arr.length; i ++){
    if(arr[i] != '--double-next' && arr[i] != '--discard-next' && arr[i] != '--double-prev' && arr[i] != '--discard-prev'){
      arrTransform.push(arr[i]);
    }
    if(arr[i] == '--double-next' && i < arr.length - 1){
      arrTransform.push(arr[i+1]);
    }
    if(arr[i] == '--double-prev' && i > 1 && typeof(arr[i - 1]) != 'string'){
      arrTransform.push(arr[i-1]);
    }
    if(arr[i] == '--discard-prev' && i > 1 && typeof(arr[i - 1]) != 'string'){
      arrTransform.pop();
    }
    if(arr[i] == '--discard-next' && i < arr.length - 1){
      i += 2;
    }
  }
  return arrTransform;
}
