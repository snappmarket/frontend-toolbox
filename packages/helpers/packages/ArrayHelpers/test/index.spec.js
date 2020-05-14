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
    it('should flatten a nested array recursively by given property name', () => {
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
    it('should flatten a nested array recursively by given property name and add level to each child', () => {
      const actual = [
        { id: 1, level: 0 },
        { id: 2, level: 1 },
        { id: 3, level: 2 },
        { id: 5, level: 3 },
        { id: 6, level: 3 },
        { id: 4, level: 2 },
      ];
      expect(ArrayHelpers.deepFlatten(payload, 'options', 'level')).toEqual(
        actual,
      );
    });
  });
  describe('arraySeparator', () => {
    const array = ['foo', 'foobar', 'bar', 'barfoo', 'snafu'];
    const separators = {
      haveFoo: /foo/,
      startWithFoo: /^foo/,
      endWithFoo: /foo$/,
      noFoo: /^((?!foo).)*$/,
    };
    it('should separate array items in several groups based on given regex', () => {
      const expected = {
        haveFoo: ['foo', 'foobar', 'barfoo'],
        startWithFoo: ['foo', 'foobar'],
        endWithFoo: ['foo', 'barfoo'],
        noFoo: ['bar', 'snafu'],
      };
      expect(ArrayHelpers.arraySeparator(array, separators)).toEqual(expected);
    });
    it('should separate array items in several groups based on given regex with no duplication', () => {
      const expected = {
        haveFoo: ['foo', 'foobar', 'barfoo'],
        startWithFoo: [],
        endWithFoo: [],
        noFoo: ['bar', 'snafu'],
      };
      expect(ArrayHelpers.arraySeparator(array, separators, true)).toEqual(
        expected,
      );
    });
    it('should throw array error cause no array is given', () => {
      try {
        ArrayHelpers.arraySeparator();
      } catch (e) {
        expect(e.message).toEqual('array should be defined');
      }
    });
    it('should throw array error cause empty array is given', () => {
      try {
        ArrayHelpers.arraySeparator([]);
      } catch (e) {
        expect(e.message).toEqual('array should be defined');
      }
    });
    it('should throw separator error cause no separator is given', () => {
      try {
        ArrayHelpers.arraySeparator(['foo']);
      } catch (e) {
        expect(e.message).toEqual('separator should be defined');
      }
    });
    it('should throw separator error cause empty separator is given', () => {
      try {
        ArrayHelpers.arraySeparator(['foo'], {});
      } catch (e) {
        expect(e.message).toEqual('separator should be defined');
      }
    });
  });
});
