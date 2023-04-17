const ERROR_MSG = 'Unable to determine the time of year!';
const INVALID_DATE = 'Invalid date!';

const SEASONS = ['winter', 'spring', 'summer', 'autumn'];

function getSeason(date) {
  if (!date) {
    return ERROR_MSG;
  }

  if (!(date instanceof Date) || isNaN(Date.parse(date))) {
    throw new Error(INVALID_DATE);
  }

  try {
    let monthNumber = date.getUTCMonth() + 1;
    return SEASONS[Math.trunc(monthNumber / 3)] || 'winter';
  }
  catch {
    throw new Error(INVALID_DATE);
  }
}

module.exports = {
  getSeason
};
