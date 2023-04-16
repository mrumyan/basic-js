function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  let additionRepeat = new Array(additionRepeatTimes).fill(String(addition));
  return new Array(repeatTimes).fill(str += additionRepeat.join(additionSeparator)).join(separator);
}

module.exports = {
  repeater
};
