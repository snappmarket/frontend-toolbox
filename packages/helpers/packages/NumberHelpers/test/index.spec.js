import * as NumberHelpers from '../index';

afterEach(() => {
  jest.clearAllMocks();
});
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

  describe('generateKey ', () => {
    it('should generate a key using a random number and timestamp', () => {
      const mockMath = Object.create(global.Math);
      mockMath.random = () => 1;
      global.Math = mockMath;
      const randomNumber = 10001;

      const now = 1466424490000;
      const mockDate = new Date(now);
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
      const timestamp = Math.floor(now / 1000);

      expect(NumberHelpers.generateKey()).toEqual(
        `${timestamp}${randomNumber}`,
      );
    });
  });

  describe('cellphoneValidate', () => {
    it('should pass the cellphone pattern', () => {
      const cellphone = '09121234567';
      expect(!!cellphone.match(NumberHelpers.cellphoneValidate())).toEqual(
        true,
      );
    });
    it('should not pass the cellphone pattern', () => {
      const cellphone = '0123456';
      expect(!!cellphone.match(NumberHelpers.cellphoneValidate())).toEqual(
        false,
      );
    });
  });
  describe('currencyPrice', () => {
    it('should apply currency format to a number', () => {
      const number = '1000000';
      const price = '۱,۰۰۰,۰۰۰ تومان';

      expect(NumberHelpers.currencyPrice(number)).toEqual(price);
    });
    it('it should not show unit after price when hasUnit get false value', (hasUnit = false) => {
      const price = '۱,۰۰۰,۰۰۰';

      expect(NumberHelpers.currencyPrice(price, hasUnit)).toEqual('۱,۰۰۰,۰۰۰ ');
    });
  });

  describe('decimalsPriceLimiter', () => {
    it('should check Price have decimals number', () => {
      const price = 3795;
      expect(NumberHelpers.decimalsPriceLimiter(price)).toEqual(price);
    });

    it('should price parseFloat number with limit number', () => {
      const price = 3795.5223669;
      expect(NumberHelpers.decimalsPriceLimiter(price)).toEqual(3795.52);
      expect(NumberHelpers.decimalsPriceLimiter(price, 3)).toEqual(3795.522);
    });
  });

  describe('integerInputValidation', () => {
    const min = 1000;
    const max = 50000;
    const inputParams = {
      validationMessages: {
        minMessage: {
          type: 'danger',
          content: 'min',
        },
        maxMessage: {
          type: 'danger',
          content: 'max',
        },
        nanMessage: {
          type: 'danger',
          content: 'nan',
        },
      },
      min,
      max,
    };
    it('should return validation true for valid value', () => {
      expect(
        NumberHelpers.numericInputValidation({
          ...inputParams,
          inputValue: '1500',
        }),
      ).toEqual({
        isValid: true,
        message: {},
        value: '1500',
      });
    });

    it('should return max error', () => {
      expect(
        NumberHelpers.numericInputValidation({
          ...inputParams,
          inputValue: '50000000',
        }),
      ).toEqual({
        isValid: false,
        message: {
          content: 'max',
          type: 'danger',
        },
        value: '50000000',
      });
    });

    it('should return min error', () => {
      expect(
        NumberHelpers.numericInputValidation({
          ...inputParams,
          inputValue: '100',
        }),
      ).toEqual({
        isValid: false,
        message: {
          content: 'min',
          type: 'danger',
        },
        value: '100',
      });
    });

    it('should return nan error', () => {
      expect(
        NumberHelpers.numericInputValidation({
          ...inputParams,
          inputValue: 'hi',
        }),
      ).toEqual({
        isValid: false,
        message: {
          content: 'nan',
          type: 'danger',
        },
        value: '',
      });
    });

    it('without min,max and error message', () => {
      expect(
        NumberHelpers.numericInputValidation({
          inputValue: '10000',
        }),
      ).toEqual({
        isValid: false,
        message: {},
        value: '10000',
      });
    });
  });

  describe('zeroPadding', () => {
    it('should add starting zeros with default value of padding', () => {
      expect(NumberHelpers.zeroPadding(2)).toEqual('02');
    });
    it('should add starting zeros with custom value of padding', () => {
      expect(NumberHelpers.zeroPadding(2, 3)).toEqual('002');
    });
    it('should not add starting zeros cause the number length is more than the padding', () => {
      expect(NumberHelpers.zeroPadding(100, 3)).toEqual('100');
    });
  });
});
