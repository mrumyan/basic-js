function getCommonCharacterCount(s1, s2) {
  let count = 0;
  for (let symbol of s1) {
    if (s2.includes(symbol)) {
      count++;
      s2 = s2.slice(0, s2.indexOf(symbol)) + s2.slice(s2.indexOf(symbol) + 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
