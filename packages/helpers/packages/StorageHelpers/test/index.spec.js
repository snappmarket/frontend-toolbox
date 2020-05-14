import * as StorageHelpers from '../index';

describe('StorageHelpers', () => {
  describe('getLocalStorageData', () => {
    it('should parse the local storage data to json object and return it', () => {
      const data = { foo: { bar: 'foobar' } };
      localStorage.setItem('foo', JSON.stringify(data));
      expect(StorageHelpers.getLocalStorageData('foo')).toEqual(data);
    });
    it('should throw an error because of some issues', () => {
      const error = 'Something happened';
      Storage.prototype.getItem = jest.fn(() => {
        throw new Error(error);
      });
      try {
        StorageHelpers.getLocalStorageData(null);
      } catch (e) {
        expect(e.message).toEqual(`Error: ${error}`);
      }
      jest.clearAllMocks();
    });
  });
});
