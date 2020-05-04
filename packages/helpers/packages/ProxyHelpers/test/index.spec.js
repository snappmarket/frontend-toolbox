import * as ProxyHelpers from '../index.js';

describe('ProxyHelpers', () => {
  describe('onChangeReflector', () => {
    it('should call the callback with define and delete property', () => {
      const mockOnChange = jest.fn();
      const mockObject = {
        foo: 'foo',
      };
      const proxy = ProxyHelpers.onChangeReflector(mockObject, mockOnChange);
      expect(proxy.foo).toEqual('foo');
      proxy.bar = 'bar';
      expect(proxy.bar).toEqual('bar');
      expect(mockOnChange).toBeCalledTimes(1);
      delete proxy.bar;
      expect(proxy.bar).toEqual(undefined);
      expect(mockOnChange).toBeCalledTimes(2);
    });
  });
});
