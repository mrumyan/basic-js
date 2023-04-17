const ERROR_MSG = "You can't remove incorrect link!";

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    position = position - 1;
    if (position >= 0 && position < this.getLength()) {
      this.chain = this.chain.filter((_, index) => index !== position);
      return this;
    } else {
      this.chain = [];
      throw new Error(ERROR_MSG);
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const finishedChain = this.chain.join('~~');
    this.chain = [];
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
