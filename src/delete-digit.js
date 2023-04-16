function deleteDigit(n) {
  let result = [];
  for (let digit of String(n)) {
    result.push(String(n).replace(new RegExp(digit), ''));
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
