import * as ObjectHelpers from '../index';

afterEach(() => {
  jest.clearAllMocks();
});
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
      expect(ObjectHelpers.flattenObject(payload)).toEqual({
        'foo.bar': 'foobar',
      });
    });
    it('should return an empty object cause given object is empty', () => {
      const payload = {};
      expect(ObjectHelpers.flattenObject(payload)).toEqual(payload);
    });
  });
  describe('safeObjectPropertyRead ', () => {
    it('should safely get a property value from an object', () => {
      const payload = { foo: '' };
      expect(ObjectHelpers.safeObjectPropertyRead(payload, 'foo')).toEqual('');
    });
    it('should safely get undefined because property is undefined', () => {
      const payload = {};
      expect(ObjectHelpers.safeObjectPropertyRead(payload, 'foo')).toEqual(
        undefined,
      );
    });
    it('should get default given value, because requested property is undefined', () => {
      const payload = {};
      expect(
        ObjectHelpers.safeObjectPropertyRead(payload, 'foo', 'bar'),
      ).toEqual('bar');
    });
  });
  describe('getNextProp ', () => {
    it('should get value of next property of given property name', () => {
      const payload = { foo: 'foo', bar: 'bar' };
      expect(ObjectHelpers.getNextProp(payload, 'foo')).toEqual('bar');
    });
  });
  describe('serializeObject', () => {
    it('should convert object properties to query parameter ', () => {
      const payload = {
        number: 1,
        string: 'test',
        array: [1, 2, 3],
        object: { foo: 'foo', bar: 'bar' },
        boolean: true,
      };
      const actual =
        'number=1&string=test&array[]=1&array[]=2&array[]=3&object[foo]=foo&object[bar]=bar&boolean=true';
      expect(ObjectHelpers.serializeObject(payload)).toEqual(actual);
    });
    it('should not convert empty object properties to query parameter ', () => {
      const payload = {
        number: undefined,
        object: {},
        array: [],
      };
      const actual = '';
      expect(ObjectHelpers.serializeObject(payload)).toEqual(actual);
    });
    it('should return return empty string cause payload is empty ', () => {
      expect(ObjectHelpers.serializeObject(null)).toEqual('');
    });
  });
  describe('removeManyByKeys', () => {
    it('should remove some keys from an object', () => {
      const payload = { foo: 'bar', bar: 'bar', foobar: 'foobar' };
      expect(ObjectHelpers.removeManyByKeys(payload, ['foo', 'bar'])).toEqual({ foobar: 'foobar' });
    });
  });
  describe('deepMerge', () => {
    it('merges two object in all levels', () => {
      const primaryObject = { foo: 'bar', bar: {a: 1, b: [1, 2, 3]}, foobar: true };
      const secondaryObject = { bar: {b: [4, 5, 6]}, foobar: false, snafu: 'cool' };
      expect(ObjectHelpers.deepMerge(primaryObject, secondaryObject)).toEqual({
        foo: "bar",
        bar: {
          a: 1,
          b: [1, 2, 3, 4, 5, 6],
        },
        foobar: false,
        snafu: 'cool',
      });
    });
  });
});
