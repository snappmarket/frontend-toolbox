import * as WindowHelpers from '../index';

describe('WindowHelpers', () => {
  describe('getPathName', () => {
    it('should get home_page because pathname is the root', () => {
      expect(WindowHelpers.getPathName('/')).toEqual('home_page');
    });
    it('should get home_page because pathname is the root', () => {
      expect(WindowHelpers.getPathName('/foo')).toEqual('foo_page');
    });
  });
  describe('getWindowSize', () => {
    it('should get window dimension', () => {
      const width = 768;
      const height = 1050;
      jest.spyOn(document.body, 'clientWidth', 'get').mockReturnValue(width);
      jest.spyOn(document.body, 'clientHeight', 'get').mockReturnValue(height);
      expect(WindowHelpers.getWindowSize()).toEqual({ width, height });
    });
  });
  describe('isMobile', () => {
    it('should get false cause it is not a mobile device', () => {
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0';
      jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(WindowHelpers.isMobile()).toBe(false);
    });
    it('should get true cause it is a mobile device', () => {
      const userAgent = "Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 Mobile Safari/537.36";
      jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(WindowHelpers.isMobile()).toBe(true);
    });
  });
  describe('detectBrowser', () => {
    it('should get agent name', () => {
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0';
      jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(WindowHelpers.detectBrowser('firefox')).toBe(true);
      expect(WindowHelpers.detectBrowser('chrome')).toBe(false);
    });
  });
  describe('scrollTop', () => {
    it('should scroll window to up with smooth mode', () => {
      WindowHelpers.scrollTop();
      expect(window.scrollY).toEqual(0);
    });
  });
});
