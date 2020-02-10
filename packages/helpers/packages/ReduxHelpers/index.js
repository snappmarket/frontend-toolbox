export const actionMaker = (type, payload = {}) => ({ type, payload });

export const normalizeActionType = (type) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) {
    return ['', '', ''];
  }
  return matches;
};

/**
 * A simple persistor
 * @param config
 * @returns {{makeInitialState: *, getMiddleware: *}}
 */
export const configPersistor = (config) => {
  const makeItemName = (name) => `${config.prefix}${name}`;
  /**
   * Get persisted state and join it with initial state
   * @param initialState
   */
  const makeInitialState = (initialState) => {
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
   * @returns {function(*): Function}
   */
  const getMiddleware = (store) => (next) => (action) => {
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
