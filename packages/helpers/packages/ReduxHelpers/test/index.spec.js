import configureMockStore from 'redux-mock-store';
import * as ReduxHelpers from '../index';

describe('ReduxHelpers', () => {
  describe('actionMaker', () => {
    it('should create an action with payload', () => {
      const type = 'FOO_TYPE';
      const payload = { foo: 'bar' };
      expect(ReduxHelpers.actionMaker(type)(payload)).toEqual({
        type,
        payload,
      });
    });
    it('should create an action without payload', () => {
      const type = 'FOO_TYPE';
      expect(ReduxHelpers.actionMaker(type)()).toEqual({ type, payload: {} });
    });
  });
  describe('normalizeActionType', () => {
    it('should get the postfix of the given type', () => {
      expect(ReduxHelpers.normalizeActionType('FOO_TYPE_REQUEST')[2]).toEqual(
        'REQUEST',
      );
      expect(ReduxHelpers.normalizeActionType('FOO_TYPE_SUCCESS')[2]).toEqual(
        'SUCCESS',
      );
      expect(ReduxHelpers.normalizeActionType('FOO_TYPE_FAILURE')[2]).toEqual(
        'FAILURE',
      );
    });
    it('get empty string because given type has no postfix', () => {
      expect(ReduxHelpers.normalizeActionType('FOO_TYPE')[2]).toEqual('');
    });
  });
  describe('configPersistor', () => {
    const initialState = { foo: { name: 'foo' } };
    const persistor = ReduxHelpers.configPersistor({
      prefix: 'persist:_',
      whitelist: ['bar', 'foobar'],
      purgeActionType: 'CLEAR_FOO',
    });
    const mockStore = configureMockStore([persistor.getMiddleware]);
    const store = mockStore({ ...initialState, foobar: { name: 'foobar' } });

    it('should get the merged initial state and localstorage data', () => {
      localStorage.setItem('persist:_bar', '{"name":"bar"}');
      expect(persistor.makeInitialState(initialState)).toEqual({
        ...initialState,
        bar: { name: 'bar' },
      });
    });
    it('should only get the initial state because localstorage has null data', () => {
      localStorage.setItem('persist:_bar', null);
      expect(persistor.makeInitialState(initialState)).toEqual({
        ...initialState,
      });
    });
    it('should dispatch an action which causes no side effect on localstorage', () => {
      expect(localStorage.getItem('persist:_foobar')).toEqual(null);
      store.dispatch({ type: 'SOME_ACTION_TYPE' });
      expect(localStorage.getItem('persist:_foobar')).toEqual(
        JSON.stringify({ name: 'foobar' }),
      );
    });
    it('should dispatch an action which causes no side effect on localstorage', () => {
      localStorage.setItem('foo', 'foo');
      store.dispatch({ type: 'CLEAR_FOO' });
      expect(localStorage.length).toEqual(0);
    });
  });
});
