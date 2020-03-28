import * as DebugHelpers from '../index';

beforeEach(() => {
  jest.spyOn(console, 'log');
});
afterEach(() => {
  jest.clearAllMocks();
});

describe('DebugHelpers', () => {
  describe('delog', () => {
    it('should log body of request in debug mode', () => {
      const body = 'Hello Snappmarket!';
      process.env.DEBUG_MODE = 'true';
      expect(console.log.mock.calls).toHaveLength(0);
      DebugHelpers.delog(body);
      expect(console.log.mock.calls).toHaveLength(1);
      expect(console.log.mock.calls[0][0]).toBe('--');
      expect(console.log.mock.calls[0][1]).toBe(body);
    });
    it('should not log body of request in non-debug mode', () => {
      const body = 'Hello Snappmarket!';
      process.env.DEBUG_MODE = 'false';
      expect(console.log.mock.calls).toHaveLength(0);
      DebugHelpers.delog(body);
      expect(console.log.mock.calls).toHaveLength(0);
    });
  });
  describe('ApiError', () => {
    it('should throw an API error', () => {
      const message = 'something bad happened!';
      try {
        throw new DebugHelpers.ApiError(message);
      } catch (e) {
        expect(e.message).toEqual(message);
      }
    });
  });
});
