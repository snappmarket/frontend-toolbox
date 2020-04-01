import * as StringHelpers from '../index';

describe('StingHelpers', () => {
  describe('stringReplace', () => {
    it('should find and replace a word in a string', () => {
      const payload = 'Hello World, this is World!';
      const expected = 'Hello Snappmarket, this is Snappmarket!';
      expect(
        StringHelpers.stringReplace('World', 'Snappmarket', payload),
      ).toEqual(expected);
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
      expect(StringHelpers.bulkStringReplace(replacements, payload)).toEqual(
        expected,
      );
    });
  });
  describe('autoLink', () => {
    it('should find and replace urls with linked url in string', () => {
      const payload =
        'hello, my website address is http://erami.name and i work in https://snapp.market';
      const expected =
        'hello, my website address is <a href="http://erami.name" target="_blank">http://erami.name</a> and i work in <a href="https://snapp.market" target="_blank">https://snapp.market</a>';
      expect(StringHelpers.autoLink(payload)).toEqual(expected);
    });
  });
});
