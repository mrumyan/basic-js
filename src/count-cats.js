function countCats(matrix) {
  return matrix.reduce((acc, array) => acc + array.filter(item => item === '^^').length, 0);
}

module.exports = {
  countCats
};
