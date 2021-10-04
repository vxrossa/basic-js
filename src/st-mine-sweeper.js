import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let grid = [];
  for(let i = 0; i < matrix.length; i++){
    grid[i] = [];
    for(let e = 0; e < matrix[i].length; e++){
      grid[i][e] = 0;
    }
  }

  for(let i = 0; i < grid.length; i++){
    for(let e = 0; e < grid[i].length; e++){
      if(matrix[i - 1] != undefined){
        if(matrix[i - 1][e - 1] == true){grid[i][e] += 1};
        if(matrix[i - 1][e] == true){grid[i][e] += 1};
        if(matrix[i - 1][e + 1] == true){grid[i][e] += 1};
      }
      if(matrix[i + 1] != undefined){
        if(matrix[i + 1][e - 1] == true){grid[i][e] += 1};
        if(matrix[i + 1][e] == true){grid[i][e] += 1};
        if(matrix[i + 1][e + 1] == true){grid[i][e] += 1};
      }
      if(matrix[i][e - 1] == true){grid[i][e] += 1};
      if(matrix[i][e + 1] == true){grid[i][e] += 1};
    }
  }
  return grid;
}
