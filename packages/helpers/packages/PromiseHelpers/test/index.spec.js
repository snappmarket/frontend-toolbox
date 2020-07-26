import * as PromiseHelpers from '../index';

describe('PromiseHelpers', () => {
  describe('racePromise', () => {
    it('should get race timeout error', async () => {
      const racePromise = await PromiseHelpers.racePromise(0);
      expect(racePromise).toEqual('RACE_TIMEOUT');
    });
  });
  describe('makeTimeout', () => {
    it('should get timeout error', async () => {
      try {
        await PromiseHelpers.makeTimeout(10);
      } catch (e) {
        expect(e.message).toEqual('TIMEOUT');
      }
    });
  });
  describe('emptyPromise', () => {
    it('should get an empty promise', async () => {
      const emptyPromise = await PromiseHelpers.emptyPromise();
      expect(emptyPromise).toEqual({});
    });
  });
  describe('sleep', () => {
    it('should get an empty promise after a delay', async () => {
      const emptyPromise = await PromiseHelpers.sleep();
      expect(emptyPromise).toEqual(undefined);
    });
  });
});
