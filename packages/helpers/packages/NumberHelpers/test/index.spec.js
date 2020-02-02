import * as NumberHelpers from '../index';

describe('NumberHelpers', () => {
  describe('persianNumber', () => {
    it('should convert english number to persian', () => {
      const payload = '123';
      const expected = '۱۲۳';
      expect(NumberHelpers.persianNumber(payload)).toEqual(expected);
    });
  });
  describe('english', () => {
    it('should convert english number to persian', () => {
      const payload = '۱۲۳';
      const expected = '123';
      expect(NumberHelpers.englishNumber(payload)).toEqual(expected);
    });
  });
});
