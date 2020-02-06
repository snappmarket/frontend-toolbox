import * as StringHelpers from '../index';

describe('StingHelpers', () => {
  describe('stringReplace', () => {
    it('should find and replace in a string', () => {
      const payload = 'Hello World!';
      const expected = 'Hello Snappmarket!';
      expect(StringHelpers.stringReplace('World', 'Snappmarket', payload)).toEqual(expected)
    });
  });
});
