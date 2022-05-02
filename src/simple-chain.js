const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
 
  getLength() {
   return this.chain.length;
    
  },
  addLink(value) {
    if(value === undefined) {
      this.chain.push('( )')
      } 
      else {
        this.chain.push((`( ${value} )`));
      }
      
      return this;
  },
  removeLink( position ) {
      if(!this.chain[position - 1])
      //  || typeof position !== 'number'
      //  || position < this.chain.length
      //  || position > this.chain.length 
      //  || (position ^ 0) !== position 
      //  || Math.sign(position) === -1 
      //  || Math.sign(position) === -0
      //  || Math.sign(position) === NaN
      //  || position === NaN
      //  || position === Infinity
       {
        this.chain = [];
        throw new Error("You can't remove incorrect link!")
      }
     this.chain.splice(position -1 ,1) 
        return this;
      },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishChainResult = this.chain.join('~~');
    this.chain = [];
   return finishChainResult;
    
  }
};

module.exports = {
  chainMaker
};
