import * as TimeHelpers from '../index';

import { sleep } from '@snappmarket/helpers';

describe('TimeHelpers', () => {
  // describe('getTimeWithMilliSeconds', () => {
  //   it('should return localTime and milliseconds ', async () => {
  //     const localTime = new Date().toLocaleTimeString()
  //     await sleep(0);
  //     const localTimeMilliseconds = new Date().getMilliseconds() ;
  //     const trimedTime = localTime.split(' ')[0];
  //     const actual = `${trimedTime}:${localTimeMilliseconds}`;

  //     expect(TimeHelpers.getTimeWithMilliSeconds()).toEqual(actual);
  //   });
  // });

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
      const diffDays = 2;
      const actual = {
        "diffTime" : diffTime,
        "diffDays" : diffDays,
      };
      expect(TimeHelpers.getDiffInDays(date1,date2)).toEqual(actual);
    });
  });

  // describe('timeDiff', () => {
  //   it('should give date and return hour, minute, seconds, full seconds and full minutes ', () => {
  //     const title = 'example title';
  //     const actual = '';
  //     expect(TimeHelpers.timeDiff.show(title)).toEqual(actual);
  //   });
  //   it('should give date and return hour, minute, seconds, full seconds and full minutes ', () => {
  //     const title = 'example title';
  //     const actual = '';
  //     expect(TimeHelpers.timeDiff.start(title)).toEqual(actual);
  //   });
  // });

  
});
