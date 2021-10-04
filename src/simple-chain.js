import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 export default {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },
  addLink (value) {
    this.chainArray.push(`( ${value} )`);
    return this;
  },
  removeLink (position) {
    if(position > this.chainArray.length || isNaN(position) || position < 1 || typeof(position) != "number"){
      this.chainArray = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain () {
    this.chainArray.reverse();
    return this;
  },
  finishChain () {
    let linkString = '';
    linkString = linkString.concat(this.chainArray.join('~~'));
    this.chainArray = [];
    return linkString;
  }
};
