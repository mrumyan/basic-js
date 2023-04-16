function getCommonCharacterCount(s1, s2) {
  let count = 0;
  for (let symbol of s1) {
    if (s2.includes(symbol)) {
      count++;
      s2 = s2.replace(new RegExp(symbol), '');
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
