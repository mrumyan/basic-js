class DepthCalculator {
  calculateDepth(array) {
    let result = 1;
    for (let item of array) {
      result += Array.isArray(item) ? this.calculateDepth(item) : 0;
    }
    return result;
  }
}

module.exports = {
  DepthCalculator
};
