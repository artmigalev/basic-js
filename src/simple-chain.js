const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  length: 0,

  getLength() {
    return this.length;
  },
  addLink(value = "") {
    if(typeof this.chain === 'string') this.chain = []
    this.length++;
    console.log(chainMaker);
    if (value) {
      this.chain.push(`( ${value} )`);
      return this;
    } else {
      this.chain.push(`( ${value} )`);
      return this;
    }
  },
  removeLink(position) {
    if (
      position > this.getLength() ||
      position <= 0 ||
      isNaN(position) ||
      !Number.isInteger(position)
    ) {
      throw Error("You can't remove incorrect link!");
    } else {
      this.length--;
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const ch = this.chain.join("~~");
    this.chain = []
    this.length =0



    return ch
  },
};

module.exports = {
  chainMaker,
};

