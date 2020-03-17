import fetch from 'isomorphic-unfetch';
import AbortController from 'abort-controller';

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
      const options = { foo: 'bar', signal: new AbortController().signal };
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
        credentials: 'same-origin',
        headers: {},
        method: 'GET',
        signal: new AbortController().signal,
      };
      const response = await HttpHelpers.universalCall({ url, params });
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${url}?foo=bar`, options);
      expect(response).toEqual(mockResponse);
    });

    it('should call an API using universal fetch with jwtToken', async () => {
      const url = 'http://snapp.market';
      const data = { foo: 'bar' };
      const options = {
        credentials: 'include', headers: {}, method: 'POST', signal: new AbortController().signal,
      };
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
      const options = {
        credentials: 'include', headers: {}, method: 'GET', signal: new AbortController().signal,
      };
      const response = await HttpHelpers.universalCall({ url, params, ...options });
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${url}?foo=bar`, options);
      expect(response).toEqual(mockResponse);
    });

    it('should call an API using universal fetch and get empty response cause it is allowed to get empty response', async () => {
      fetch.mockReturnValue(Promise.resolve({
        json: () => ({}),
        headers: {
          get: (key) => mockHeaders[key],
        },
        ok: true,
        status: 204,
      }));
      const url = 'http://snapp.market';
      const params = { foo: 'bar' };
      const options = {
        credentials: 'include', headers: {}, method: 'GET', signal: new AbortController().signal,
      };
      const response = await HttpHelpers.universalCall({
        url, allowedNoContent: true, params, ...options,
      });
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(`${url}?foo=bar`, options);
      expect(response).toEqual({});
    });
    it('should call an API using universal fetch and get epi error, because response is invalid', async () => {
      fetch.mockReturnValue(Promise.resolve({
        json: () => ({}),
        headers: {
          get: () => {},
        },
        ok: true,
      }));
      const url = 'http://snapp.market';
      const params = { foo: 'bar' };
      const options = {
        credentials: 'include', headers: {}, method: 'GET', signal: new AbortController().signal,
      };
      try {
        await HttpHelpers.universalCall({
          url, allowedNoContent: true, params, ...options,
        });
      } catch (e) {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${url}?foo=bar`, options);
        expect(e.message).toEqual('SERVER_CONTENT_TYPE_ERROR');
      }
    });
    it('should call an API using universal fetch and get epi error, because response can not be parsed', async () => {
      fetch.mockReturnValue(Promise.resolve({
        headers: {
          get: (key) => mockHeaders[key],
        },
        ok: true,
      }));
      const url = 'http://snapp.market';
      const params = { foo: 'bar' };
      const options = {
        credentials: 'include', headers: {}, method: 'GET', signal: new AbortController().signal,
      };
      try {
        await HttpHelpers.universalCall({
          url, allowedNoContent: true, params, ...options,
        });
      } catch (e) {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${url}?foo=bar`, options);
        expect(e.message).toEqual('SERVER_CONTENT_PARSING_ERROR');
      }
    });
    it('should call an API using universal fetch and get epi error, because response can not be parsed', async () => {
      const error = {
        message: 'something bad happened',
      };
      fetch.mockReturnValue(Promise.resolve({
        json: () => (error),
        headers: {
          get: (key) => mockHeaders[key],
        },
        ok: false,
      }));
      const url = 'http://snapp.market';
      const params = { foo: 'bar' };
      const options = {
        credentials: 'include', headers: {}, method: 'GET', signal: new AbortController().signal,
      };
      try {
        await HttpHelpers.universalCall({
          url, allowedNoContent: true, params, ...options,
        });
      } catch (e) {
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${url}?foo=bar`, options);
        expect(e).toEqual(error);
      }
    });
  });
});
