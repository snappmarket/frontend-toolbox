import * as TimeHelpers from '../index';

describe('TimeHelpers', () => {
  describe('getTimeWithMilliSeconds', () => {
    it('should get time with milli seconds', () => {
      const localTime = new Date().toLocaleTimeString();
      const milliSeconds = new Date().getMilliseconds();
      expect(
        TimeHelpers.getTimeWithMilliSeconds(),
      ).toEqual(milliSeconds);
    });
  });
  describe('getTimeWithMilliSeconds', () => {
    it('should get date minute and seconds', () => {
      const dateString = "2020-08-02 16:00:00";
      const date = new Date(dateString);
      const minute = date.getMinutes();
      const seconds = date.getSeconds();
      const expected = '';
      expect(
        TimeHelpers.getClock(),
      ).toEqual(expected);
    });
  });
  describe('getDiffInDays', () => {
    it('should get two date and calculate different of them', () => {
      const date1 = "2020-08-02 16:00:00";
      const date2 = "2020-08-02 13:00:00";
      const date = new Date(date1,date2);
      const expected = '03:00:00';
      expect(
        TimeHelpers.getTimeWithMilliSeconds(date),
      ).toEqual(expected);
    });
  });
});
