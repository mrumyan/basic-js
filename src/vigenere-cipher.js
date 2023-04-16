class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  algorithm(str, key, isEncrypt) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let j = 0;
    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      if (!str[i].match(/[A-Z]/g)) {
        result += str[i];
        continue;
      }

      if (isEncrypt) {
        result += String.fromCharCode('A'.charCodeAt(0) + ((str.charCodeAt(i) + key.charCodeAt(j)) % 26)).toUpperCase();
      } else {
        result += String.fromCharCode('A'.charCodeAt(0) + ((str.charCodeAt(i) - key.charCodeAt(j) + 26) % 26)).toUpperCase();
      }
      j = j === key.length - 1 ? 0 : j + 1;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(str, key) {
    return this.algorithm(str, key, true);
  }

  decrypt(str, key) {
    return this.algorithm(str, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
