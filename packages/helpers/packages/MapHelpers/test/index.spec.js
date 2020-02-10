import * as MapHelpers from '../index';

describe('MapHelpers', () => {
  describe('isLocationInIran', () => {
    it('should return true cause location is in iran', () => {
      const lat = 35.6964895;
      const lng = 51.0696315;
      expect(MapHelpers.isLocationInIran(lat, lng)).toEqual(true);
    });
    it('should return false cause location is in not iran', () => {
      const lat = 40.6976637;
      const lng = -74.1197638;
      expect(MapHelpers.isLocationInIran(lat, lng)).toEqual(false);
    });
  });
});
