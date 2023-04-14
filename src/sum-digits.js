function getSumOfDigits(n) {
  let sum = String(n).split('').reduce((sum, digit) => sum + +digit, 0);
  if (sum >= 10) {
    sum = getSumOfDigits(sum);
  }
  return sum;
}

module.exports = {
  getSumOfDigits
};
