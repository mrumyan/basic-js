function sortByHeight(array) {
  let filteredArray = array.filter(item => item !== -1).sort((a, b) => a - b);
  return array.map(item => item !== -1 ? filteredArray.shift() : item);
}

module.exports = {
  sortByHeight
};
