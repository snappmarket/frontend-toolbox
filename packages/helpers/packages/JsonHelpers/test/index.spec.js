import * as JsonHelpers from '../index';

describe('JsonHelpers', () => {
  describe('recursiveJsonParse', () => {
    it('should parse a json string recursively', () => {
      const payload = {
        0: {
          id: 1,
          title: 'foo',
          children: [
            {
              id: 3,
              title: 'foo',
              children: [
                {
                  id: 5,
                  title: 'foo',
                  children: [],
                },
                {
                  id: 6,
                  title: 'foo',
                  children: [],
                },
              ],
            },
            {
              id: 4,
              title: 'foo',
              children: [],
            },
          ],
        },
        1: {
          id: 2,
          title: 'foo',
          children: [],
        },
      };
      const collection = JsonHelpers.recursiveJsonParse(
        {},
        JSON.stringify(payload),
      );
      expect(collection).toEqual(payload);
    });
    it('should return given value, cause it is not a json', () => {
      const payload = 'foo';
      expect(JsonHelpers.recursiveJsonParse({}, payload)).toEqual(payload);
    });
    it('should return given value, cause json is invalid', () => {
      const payload = '{"foo":"bar}';
      expect(JsonHelpers.recursiveJsonParse({}, payload)).toEqual(payload);
    });
  });
});
