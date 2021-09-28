import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
 export default {
  chainLength: 0,
  linkString: '',
  chainArray: [],
  getLength() {
    return this.chainLength;
  },
  addLink (value) {
    this.chainLength += 1;
    this.chainArray.push(value);
    return this;
  },
  removeLink (position) {
    if(position > this.chainArray.length || isNaN(position) || position < 1 || typeof(position) != "number"){
      this.chainArray = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chainArray.splice(position - 1, 1);
    this.chainLength -= 1;
    return this;
  },
  reverseChain () {
    this.chainArray.reverse();
    return this;
  },
  finishChain () {
    for(let i = 0; i < this.chainArray.length; i+= 1){
      if(i >= 1){
        this.linkString = this.linkString.concat('~~');
      };
      this.linkString = this.linkString.concat(`( ${this.chainArray[i]} )`);
    };
    this.chainArray = [];
    return this.linkString;
  }
};
