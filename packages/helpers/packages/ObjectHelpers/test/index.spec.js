import * as ObjectHelpers from '../index';

describe('ObjectHelpers', () => {
  describe('removeByKey', () => {
    it('should remove a non-numeric key from an object', () => {
      const payload = { foo: 'bar' };
      expect(ObjectHelpers.removeByKey(payload, 'foo')).toEqual({});
    });
    it('should remove a numeric key from an object', () => {
      const payload = { 0: 'bar' };
      expect(ObjectHelpers.removeByKey(payload, 0)).toEqual({ 0: 'bar' });
    });
  });
});
