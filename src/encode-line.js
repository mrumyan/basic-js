function encodeLine(str) {
  let set = new Set(str.split(''));
  for (let symbol of set) {
    let count = str.match(new RegExp(symbol, 'gi')).length;
    let reg = new RegExp(`${symbol}{${count}}`, 'gi');
    if (count > 1) {
      str = str.replace(reg, `${count}${symbol}`);
    }
  }
  return str;
}

module.exports = {
  encodeLine
};
