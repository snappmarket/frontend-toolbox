import * as ObjectHelpers from '../index';

afterEach(() => {
  jest.clearAllMocks();
})
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
  describe('flattenObject', () => {
    it('should recursively flatten an object', () => {
      const payload = { foo: { bar: 'foobar' } };
      expect(ObjectHelpers.flattenObject(payload)).toEqual({ 'foo.bar': 'foobar' });
    });
    it('should return an empty object cause given object is empty', () => {
      const payload = {};
      expect(ObjectHelpers.flattenObject(payload)).toEqual(payload);
    });
  });
});
