const APP_INFO = require('../appInfo').default;

module.exports = {
  /**
   * Gives us a cookie
   * @param key
   * @returns {string}
   */
  getCookie(key) {
    const { cookies } = APP_INFO.NODE_GLOBALS;
    return cookies[key] || null;
  },
  /**
   * Set a cookie
   * @param name
   * @param value
   * @param expireDays
   * @param path
   */
  setCookie(name, value, expireDays = 90, path = '/') {
    const d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    APP_INFO.NODE_GLOBALS.setCookie(name, value, {
      expires: d.toUTCString(),
      httpOnly: true,
      path,
    });
  },
};
