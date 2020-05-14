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
});
