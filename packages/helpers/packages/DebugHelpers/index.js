// eslint-disable-next-line func-style
/**
 * @function
 * @name delog
 * @description logs body of request on the console
 * @param   body  {string}  body of the message you want to log on console
 */
function delog(body) {
  if (process.env.DEBUG_MODE === 'true') {
    // eslint-disable-next-line no-console
    console.log('--', body);
  }
}

/**
 * @name ApiError
 * @description Custom error handler to api requests
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
