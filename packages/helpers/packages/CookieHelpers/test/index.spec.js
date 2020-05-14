import * as CookieHelpers from '../index';

beforeAll(() => {
  document.cookie = 'foo=bar';
  document.cookie = 'test=test';
});
describe('CookieHelpers', () => {
  describe('getCookie', () => {
    it('should return value of a cookie', () => {
      expect(CookieHelpers.getCookie('foo')).toEqual('bar');
    });
    it('should not return value of a cookie', () => {
      expect(CookieHelpers.getCookie('bar')).toEqual('');
    });
  });
  describe('setCookie', () => {
    it('should set a cookie in document', () => {
      CookieHelpers.setCookie('bar', 'foo');
      expect(document.cookie).toEqual('foo=bar; test=test; bar=foo');
      CookieHelpers.deleteCookie('bar'); // remove it for next test
    });
  });
  describe('deleteCookie', () => {
    it('should delete a cookie in document', () => {
      CookieHelpers.deleteCookie('foo');
      expect(document.cookie).toEqual('test=test');
    });
  });
  describe('makeCookieString', () => {
    it('should make a concatenated string of keys and values of an object', () => {
      const payload = { foo: 'foo', bar: 'bar' };
      expect(CookieHelpers.makeCookieString(payload)).toEqual(
        'foo=foo; bar=bar',
      );
    });
  });
});
