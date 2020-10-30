/**
 * @function
 * @name actionMaker
 * @description creates an action
 * @param type
 * @returns {function(*=): {payload: *, type: *}}
 */
export const actionMaker = type => (payload = {}) => ({ type, payload });

/**
 * @function
 * @name normalizeActionType
 * @description separates the postfix of the action name
 * @param type    {string}    type of the action you want to get the postfix
 * @return {string[]|(RegExpExecArray & {groups: {}})}
 */
export const normalizeActionType = type => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) {
    return ['', '', ''];
  }
  return matches;
};

/**
 * @function
 * @name configPersistor
 * @description A simple persistor
 * @param   config    {object}    configuration of the persistor such as prefix for the localstorage key or whitelist to make the reducer persisted
 * @return {{makeInitialState: (function(Object): {}), getMiddleware: (function(*=): function(*): function(...[*]=))}}
 */
export const configPersistor = config => {
  /**
   * Concatenates the name of the reducer with the given prefix
   * @param  name    {string}    name of the reducer
   * @return {string}
   */
  const makeItemName = name => `${config.prefix}${name}`;

  /**
   * Get persisted state and join it with initial state
   * @param initialState    {object}    default state of the application
   * @returns {object}
   */
  const makeInitialState = initialState => {
    const temp = { ...initialState };

    // eslint-disable-next-line no-restricted-syntax
    for (const item of config.whitelist) {
      const itemName = makeItemName(item);
      const localItemValue = localStorage.getItem(itemName);

      if (localItemValue && localItemValue !== 'null') {
        temp[item] = JSON.parse(localStorage.getItem(itemName));
      }
    }
    return temp;
  };

  /**
   * Make a middleware for our persistor
   * @param store
   * @return {function(*): function(...[*]=)}
   */
  const getMiddleware = store => next => action => {
    if (action.type === config.purgeActionType) {
      localStorage.clear();
      next(action);
      return true;
    }
    next(action);
    const stateToStore = store.getState();

    // eslint-disable-next-line no-restricted-syntax
    for (const reducer in stateToStore) {
      if (config.whitelist.includes(reducer)) {
        localStorage.setItem(
          makeItemName(reducer),
          JSON.stringify(stateToStore[reducer]),
        );
      }
    }
    return true;
  };

  return {
    makeInitialState,
    getMiddleware,
  };
};
