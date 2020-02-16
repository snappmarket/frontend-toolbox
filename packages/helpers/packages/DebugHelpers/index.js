const DEBUG_MODE = process.env.DEBUG_MODE || 'false';

// eslint-disable-next-line func-style
function delog(body) {
  if (DEBUG_MODE !== 'false') {
    // eslint-disable-next-line no-console
    console.log(
      `%c${body}`,
      'color: red; font-weight: bold; font-size: 12px; text-shadow: 0 0 5px rgba(0,0,0,0.2);',
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
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
Reflect.setPrototypeOf(ApiError, Error);


export { ApiError, delog };
