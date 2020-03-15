import * as NumberHelpers from '../index';

describe('NumberHelpers', () => {
  describe('persianNumber', () => {
    it('should convert english number to persian', () => {
      const payload = '0123456789';
      const expected = '۰۱۲۳۴۵۶۷۸۹';
      expect(NumberHelpers.persianNumber(payload)).toEqual(expected);
    });
  });
  describe('englishNumber', () => {
    it('should convert arabic-extended digits to english digits', () => {
      const payload = '٠١٢٣٤٥٦٧٨٩';
      const expected = '0123456789';
      expect(NumberHelpers.englishNumber(payload)).toEqual(expected);
    });
    it('should convert arabic-indic digits to english digits', () => {
      const payload = '۰۱۲۳۴۵۶۷۸۹';
      const expected = '0123456789';
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
