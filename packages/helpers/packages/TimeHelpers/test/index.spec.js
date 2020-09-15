import * as TimeHelpers from '../index';

import { sleep } from '@snappmarket/helpers';

describe('TimeHelpers', () => {
  describe('getTimeWithMilliSeconds', () => {
    it('should return localTime and milliseconds ', async () => {
      expect(TimeHelpers.getTimeWithMilliSeconds()).toContain(':');
    });
  });

  describe('getClock', () => {
    it('should give date and return hour, minute, seconds, full seconds and full minutes ', () => {
      const mockDate = '2020-05-04 17:5:3';
      const date = new Date(mockDate);
      const minute = date.getMinutes();
      const seconds = date.getSeconds();
      const hour = date.getHours();
      const fullMinute =  `0${minute}`;
      const fullSeconds = `0${seconds}`;
      const actual = {
        "fullMinute" : fullMinute,
        "fullSeconds" : fullSeconds,
        "hour" : hour,
        "minute" : minute,
        "seconds" : seconds,
      };
      expect(TimeHelpers.getClock(mockDate)).toEqual(actual);
    });
    it('should give date and return hour, minute, seconds, full seconds and full minutes ', () => {
      const mockDate2 = '2020-02-05 17:15:21';
      const date = new Date(mockDate2);
      const minute = date.getMinutes();
      const seconds = date.getSeconds();
      const hour = date.getHours();
      const actual = {
        "fullMinute" : minute,
        "fullSeconds" : seconds,
        "hour" : hour,
        "minute" : minute,
        "seconds" : seconds,
      };
      expect(TimeHelpers.getClock(mockDate2)).toEqual(actual);
    });
  });

  describe('getDiffInDays', () => {
    it('should give date and return hour, minute, seconds, full seconds and full minutes ', () => {
      const mockDate1 = '2020-05-04 17:5:3';
      const mockDate2 = '2020-05-03 17:4:2';
      const date1 = new Date(mockDate1);
      const date2 = new Date(mockDate2);
      const diffTime = 86461000;
      const diffDays = 1;
      const actual = {
        "diffTime" : diffTime,
        "diffDays" : diffDays,
      };
      expect(TimeHelpers.getDiffInDays(date1,date2)).toEqual(actual);
    });
  });

  describe('timeDiff', async () => {
    it('should give title and return different of startTime and endTime ', async () => {
      const title = 'example title';
      const actual = '';
      const startTime = Date.now();
      TimeHelpers.timeDiff.start(title);

      await sleep(20);
      const expected = TimeHelpers.timeDiff.show(title);
      const endTime = Date.now() - startTime;
      expect(expected).toBeLessThan(endTime + 1);
    });
    it('should give title and return different of startTime and endTime ', async () => {
      const title = 'example title';
      const actual = '';
      const startTime = Date.now();
      TimeHelpers.timeDiff.start(title);

      await sleep(10);
      const expected = TimeHelpers.timeDiff.show(title);
      const endTime = Date.now() - startTime;
      expect(expected).toBeGreaterThanOrEqual(endTime - 1);
    });
  });
});
