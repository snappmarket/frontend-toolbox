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
  });
  describe("normalizeActionType", () => {
    it("should get the postfix of the given type", () => {
      expect(ReduxHelpers.normalizeActionType('FOO_TYPE_REQUEST')[2]).toEqual("REQUEST");
      expect(ReduxHelpers.normalizeActionType('FOO_TYPE_SUCCESS')[2]).toEqual("SUCCESS");
      expect(ReduxHelpers.normalizeActionType('FOO_TYPE_FAILURE')[2]).toEqual("FAILURE");
    });
    it("get empty string because given type has no postfix", () => {
      expect(ReduxHelpers.normalizeActionType('FOO_TYPET')[2]).toEqual("");
    });
  });
});
