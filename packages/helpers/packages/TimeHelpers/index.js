import { delog } from '../DebugHelpers';

/**
 * @function
 * @name getTimeWithMilliSeconds
 * @description get time with milli seconds
 * @returns  {object}
 */
export const getTimeWithMilliSeconds = () => {
  const localTime = new Date().toLocaleTimeString();
  return `${localTime.split(' ')[0]}:${new Date().getMilliseconds()}`;
};

/**
 * @function
 * @name getClock
 * @description get date minute and seconds
 * @param     dateString       {string}    given dateString to convert Date format with minutes and seconds
 * @returns   {object}
 */
export const getClock = dateString => {
  const date = new Date(dateString);
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  return {
    hour: date.getHours(),
    minute,
    seconds,
    fullMinute: minute.toString().length === 1 ? `0${minute}` : minute,
    fullSeconds: seconds.toString().length === 1 ? `0${seconds}` : seconds,
  };
};

/**
 * @function
 * @name getDiffInDays
 * @description get two date and calculate different of them
 * @param   date1    {Date}
 * @param   date2    {string}
 * @returns {object}
 */
export const getDiffInDays = (date1, date2 = new Date()) => {
  const diffTime = Math.abs(date1 - date2);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return {
    diffDays,
    diffTime,
  };
};

/**
 * @function
 * @name timeDiff
 * @description different time
 * @param     title       {string}
 */
const times = {};
export class timeDiff {
  static start(title) {
    times[title] = Date.now();
  }

  static show(title) {
    const diff = Date.now() - times[title];
    delog(
      `🕑 ${title} took: ${(diff).toLocaleString(
        'es-US',
      )}ms`,
    );
    return diff;
  }
}
