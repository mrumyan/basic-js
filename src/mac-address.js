function isMAC48Address(mac) {
  let array = mac.split('-');
  if (array.length !== 6) {
    return false;
  } else {
    return array.every(item => !Number.isNaN(parseInt(item, 16)));
  }
}

module.exports = {
  isMAC48Address
};
