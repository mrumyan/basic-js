const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && Number.parseFloat(+sampleActivity) > 0) {
    let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
    return t > 0 ? t : false;
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
