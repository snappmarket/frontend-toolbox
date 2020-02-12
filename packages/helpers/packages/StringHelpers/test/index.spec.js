import * as StringHelpers from '../index';

describe('StingHelpers', () => {
  describe('stringReplace', () => {
    it('should find and replace a word in a string', () => {
      const payload = 'Hello World!';
      const expected = 'Hello Snappmarket!';
      expect(StringHelpers.stringReplace('World', 'Snappmarket', payload)).toEqual(expected);
    });
  });
  describe('bulkStringReplace', () => {
    it('should find and replace in multiple words in a string', () => {
      const payload = 'Hello World!';
      const replacements = {
        Hello: 'How You',
        World: 'Doing',
        '!': '?',
      };
      const expected = 'How You Doing?';
      expect(StringHelpers.bulkStringReplace(replacements, payload)).toEqual(expected);
    });
  });
});
