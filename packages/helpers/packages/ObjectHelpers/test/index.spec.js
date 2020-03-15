import * as ObjectHelpers from '../index';

describe('ObjectHelpers', () => {
  describe('removeByKey', () => {
    it('should remove a non-numeric key from an object', () => {
      const payload = { foo: 'bar', bar: 'bar' };
      expect(ObjectHelpers.removeByKey(payload, 'foo')).toEqual({ bar: 'bar' });
    });
    it('should remove a numeric key from an object', () => {
      const payload = { 0: 'foo', 1: 'bar' };
      expect(ObjectHelpers.removeByKey(payload, 0)).toEqual({ 1: 'bar' });
    });
  });
});
