import * as ReduxHelpers from '../index'
describe("ReduxHelpers", () => {
  describe("actionMaker", () => {
    it("should create an action with payload", () => {
      const type = "FOO_TYPE";
      const payload = {foo: 'bar'};
      expect(ReduxHelpers.actionMaker(type, payload)).toEqual({type, payload});
    });
    it("should create an action without payload", () => {
      const type = "FOO_TYPE";
      expect(ReduxHelpers.actionMaker(type)).toEqual({type, payload: {}});
    });
  })
});
