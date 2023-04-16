function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let secretName = [];
    for (let member of members) {
      if (typeof member === 'string') {
        secretName.push(member.trim().slice(0, 1).toUpperCase());
      }
    }
    return secretName.sort().join('');
  }
  return false;
}

module.exports = {
  createDreamTeam
};
