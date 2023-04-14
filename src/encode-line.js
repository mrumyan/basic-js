function encodeLine(str) {
  let result = '';
  let array = str.split('');
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (i === array.length - 2) {
      if (array[i] !== array[i + 1]) {
        result += `${array[array.length - 1]}`;
      } else {
        count++;
        result += `${count !== 1 ? count + 1 : ''}${array[array.length - 2]}`;
      }
    } else {
      count++;
      if (array[i] !== array[i + 1]) {
        result += `${count !== 1 ? count : ''}${array[i]}`;
        count = 0;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
