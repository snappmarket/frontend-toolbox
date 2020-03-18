import * as OsHelpers from '../index';

afterEach(() => {
  jest.clearAllMocks();
});
describe('OsHelpers', () => {
  describe('getOSName', () => {
    it('should detect os as windows', () => {
      const appVersion = '5.0 (Windows)';
      expect(OsHelpers.getOSName(appVersion)).toEqual('Windows');
    });
  });
  describe('getAgent', () => {
    it('should detect os as windows', () => {
      const appVersion = '5.0 (Windows)';
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0';
      jest.spyOn(navigator, 'appVersion', 'get').mockReturnValue(appVersion);
      jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue(userAgent);

      expect(OsHelpers.getAgent()).toEqual({
        userAgent,
        OSVersion: OsHelpers.getOSName(appVersion),
      });
    });
  });
});
