const ERROR_MSG = "'arr' parameter must be an instance of the Array!";

function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error(ERROR_MSG);
  }

  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      switch (array[i]) {
        case '--discard-next':
          if (i < array.length - 1) {
            i += 2;
          }
          break;
        case '--discard-prev':
          if (result.length) {
            result.pop();
          }
          break;
        case '--double-next':
          if (i < array.length - 1) {
            result.push(array[i + 1]);
          }
          break;
        case '--double-prev':
          if (result.length) {
            result.push(result[result.length - 1]);
          }
          break;
        default:
          result.push(array[i]);
          break;
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = {
  transform
};
