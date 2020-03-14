import fetch from 'isomorphic-unfetch';
import * as HttpHelpers from '../index';
jest.mock('isomorphic-unfetch');

afterEach(() => {
  jest.clearAllMocks();
});
describe('HttpHelpers', () => {
  describe('fetchWithTimeOut', () => {
    it('should fetch, and fetch should win the race', () => { // @todo: should write another test when fetch loses the race and times out
      const url = 'http://snapp.market';
      const options = { foo: 'bar' };
      HttpHelpers.fetchWithTimeOut(url, options);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(url, options);
    });
  });
  describe('universalCall', () => {
    it('should call an API using universall fetch', () => {
      const url = 'http://snapp.market';
      const params = { foo: 'bar' };
      const options = { credentials: 'include', headers: {}, method: 'GET' };
      HttpHelpers.universalCall({ url, params, ...options });
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${url}?foo=bar`, options);
    });
  });
});
