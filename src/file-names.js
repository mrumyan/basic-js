function renameFiles(names) {
  let result = [];
  let map = new Map();
  for (let name of names) {
    if (!map.has(name)) {
      map.set(name, 1);
      result.push(!result.includes(name) ? name : `${name}(${map.get(name)})`);
    } else {
      result.push(`${name}(${map.get(name)})`);
      map.set(name, map.get(name) + 1);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
