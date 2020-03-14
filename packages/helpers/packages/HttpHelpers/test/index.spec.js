import fetch from 'isomorphic-unfetch';
import * as HttpHelpers from '../index';

jest.mock('isomorphic-unfetch');
const mockResponse = { foo: 'bar' };
const mockHeaders = {
  'content-type': 'application/json',
};
beforeEach(() => {
  fetch.mockReturnValue(Promise.resolve({
    json: () => (mockResponse),
    headers: {
      get: (key) => mockHeaders[key],
    },
    ok: true,
  }));
});
afterEach(() => {
  jest.clearAllMocks();
});

describe('HttpHelpers', () => {
  describe('fetchWithTimeOut', () => {
    it('should fetch, and fetch should win the race', async () => { // @todo: should write another test when fetch loses the race and times out
      const url = 'http://snapp.market';
      const options = { foo: 'bar' };
      const response = await HttpHelpers.fetchWithTimeOut(url, options);
      const result = await response.json();
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(url, options);
      expect(result).toEqual(mockResponse);
    });
  });
  describe('universalCall', () => {
    it('should call an API using universal fetch', async () => {
      const url = 'http://snapp.market';
      const params = { foo: 'bar' };
      const options = {
        credentials: 'include',
        headers: {},
        method: 'GET',
      };
      const response = await HttpHelpers.universalCall({ url, params, ...options });
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${url}?foo=bar`, options);
      expect(response).toEqual(mockResponse);
    });

    it('should call an API using universal fetch with jwtToken', async () => {
      const url = 'http://snapp.market';
      const data = { foo: 'bar' };
      const options = { credentials: 'include', headers: {}, method: 'POST' };
      const jwtToken = 'here is my token';
      const response = await HttpHelpers.universalCall({
        url, data, jwtToken, ...options,
      });
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${url}`, {
        ...options,
        body: JSON.stringify(data),
        headers: {
          authorization: `Bearer ${jwtToken}`,
        },
      });
      expect(response).toEqual(mockResponse);
    });

    it('should call an API using universal fetch and get response', async () => {
      const url = 'http://snapp.market';
      const params = { foo: 'bar' };
      const options = { credentials: 'include', headers: {}, method: 'GET' };
      const response = await HttpHelpers.universalCall({ url, params, ...options });
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${url}?foo=bar`, options);
      expect(response).toEqual(mockResponse);
    });
  });
});
