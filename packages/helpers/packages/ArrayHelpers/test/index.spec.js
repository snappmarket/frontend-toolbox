import * as ArrayHelpers from '../index';

describe('ArrayHelpers', () => {
  describe('arrayItemAddProp', () => {
    it('should merge given property object to each item of the original array', () => {
      const payload = [{ id: 1 }, { id: 2 }, { id: 3 }];
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
  describe('stringifyArray', () => {
    it('should stringify selected properties of object in array ', () => {
      const payload = [
        { id: 1, title: 'foo', foo: 'test' },
        { id: 2, title: 'bar', foo: 'test' },
        { id: 3, title: 'test', foo: 'test' },
      ];

      const actual =
        '[{"id":1,"title":"foo"},{"id":2,"title":"bar"},{"id":3,"title":"test"}]';

      expect(ArrayHelpers.stringifyArray(payload, ['id', 'title'])).toEqual(
        actual,
      );
    });
  });
  describe('deepFlatten', () => {
    it('should flatten a nested array recursively by given property name', () => {
      const payload = {
        id: 1,
        options: [
          {
            id: 2,
            options: [
              {
                id: 3,
                options: [{ id: 5 }, { id: 6 }],
              },
              { id: 4 },
            ],
          },
        ],
      };
      const actual = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 5 },
        { id: 6 },
        { id: 4 },
      ];
      expect(ArrayHelpers.deepFlatten(payload, 'options')).toEqual(actual);
    });
  });
});
