import fetch from 'isomorphic-unfetch';

import * as HttpHelpers from '../index';
jest.mock('isomorphic-unfetch');

describe('HttpHelpers', () => {
  describe('fetchWithTimeOut', () => {
    it('should fetch, and fetch should win the race', () => {
      const url = 'http://snapp.market';
      const options = { foo: 'bar' };
      HttpHelpers.fetchWithTimeOut(url, options);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(url, options);
    });
  });
});
