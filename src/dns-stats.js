function getDNSStats(domains) {
  const dns = {};
  for (let domain of domains) {
    let array = domain.split('.').reverse();
    let subDomain = '';
    for (let item of array) {
      subDomain += `.${item}`;
      if (!dns.hasOwnProperty(subDomain)) {
        dns[subDomain] = 1;
      } else {
        dns[subDomain] = dns[subDomain] + 1;
      }
    }
  }
  return dns;
}

module.exports = {
  getDNSStats
};
