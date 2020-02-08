import * as NumberHelpers from '../index';

describe('NumberHelpers', () => {
  describe('persianNumber', () => {
    it('should convert english number to persian', () => {
      const payload = '123';
      const expected = '۱۲۳';
      expect(NumberHelpers.persianNumber(payload)).toEqual(expected);
    });
  });
  describe('englishNumber', () => {
    it('should convert persian number to english', () => {
      const payload = '۱۲۳';
      const expected = '123';
      expect(NumberHelpers.englishNumber(payload)).toEqual(expected);
    });
  });
  describe('cellphoneValidate', () => {
    it('should pass the cellphone pattern', () => {
      const cellphone = '09121234567';
      expect(!!cellphone.match(NumberHelpers.cellphoneValidate())).toEqual(true);
    });
    it('should not pass the cellphone pattern', () => {
      const cellphone = '0123456';
      expect(!!cellphone.match(NumberHelpers.cellphoneValidate())).toEqual(false);
    });
  });
});
