const DEBUG_MODE = process.env.DEBUG_MODE || 'false';

// eslint-disable-next-line func-style
function delog(body) {
  if (DEBUG_MODE !== 'false') {
    // eslint-disable-next-line no-console
    console.log(
      `%c${body}`,
      'color: red; font-weight: bold; font-size: 12px; text-shadow: 0 0 5px rgba(0,0,0,0.2);'
    );
  }
}

/**
 * Custom error handler to api requests
 * @param args
 * @returns {any}
 * @constructor
 */
// eslint-disable-next-line func-style
function ApiError(...args) {
  const instance = Reflect.construct(Error, args);
  Reflect.setPrototypeOf(instance, Reflect.getPrototypeOf(this));
  return instance;
}
ApiError.prototype = Object.create(Error.prototype, {
  constructor: {
    value       : Error,
    enumerable  : false,
    writable    : true,
    configurable: true
  }
});
Reflect.setPrototypeOf(ApiError, Error);

/**
 * Catch errors happened in global way
 * @param error
 * @param toast
 */
// eslint-disable-next-line require-yield
function* globalErrorCatcher(error) {
  if (error instanceof ApiError) {
    delog(`Global Api Error catch - ${error.message}`);

    // if (toast) {
    //   yield put(messageActions.showErrorToast({ title: message }));
    // }

    /**
     * Show stack trace of error
     */
    if (DEBUG_MODE !== 'false') {
      // eslint-disable-next-line no-console
      console.trace();
    }
  }

  // TODO : maybe handle all api requests logging here
  // yield* writeLog({
  //   payload: {
  //     medium: 'search location',
  //     action: 'XHR',
  //     detail: `failed to get search result of location`,
  //   },
  // });
}

export { ApiError, delog, globalErrorCatcher };
