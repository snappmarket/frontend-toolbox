import * as WindowHelpers from '../index'

describe("WindowHelpers", () => {
  describe("getPathName", () => {
    it("should get home_page because pathname is the root", () => {
      expect(WindowHelpers.getPathName('/')).toEqual('home_page');
    });
    it("should get home_page because pathname is the root", () => {
      expect(WindowHelpers.getPathName('/foo')).toEqual('foo_page');
    });
  });
});
