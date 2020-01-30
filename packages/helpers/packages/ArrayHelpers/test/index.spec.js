import * as ArrayHelpers from '../index';

describe('ArrayHelpers', () => {
  describe('arrayItemAddProp', () => {
    it('should merge given property object to each item of the original array', () => {
      const payload = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ];
      const props = { title: 'foo' };

      const actual = [
        { id: 1, title: 'foo' },
        { id: 2, title: 'foo' },
        { id: 3, title: 'foo' },
      ];

      expect(ArrayHelpers.arrayItemAddProp(payload, props)).toEqual(actual);
    });
  });

  describe('flattenArray', () => {
    it('should flatten nested  array based on object key ', () => {
      const payload = [
        { foo: [{ id: 1 }, { id: 2 }] },
        { foo: [{ id: 3 }, { id: 4 }] },
        { foo: [{ id: 5 }, { id: 6 }] },
      ];

      const actual = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
      ];

      expect(ArrayHelpers.flattenArray(payload, 'foo')).toEqual(actual);
    });
  });
});
