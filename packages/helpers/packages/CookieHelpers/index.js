/**
 * @name getCookie
 * @desc Gives us a cookie by name
 * @param key
 * @returns {string}
 */
export const getCookie = key => {
  const name = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let index = 0; index < cookies.length; index += 1) {
    let cookie = cookies[index];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
};

/**
 * @name setCookie
 * @description Sets a cookie
 * @param name
 * @param value
 * @param expireDays
 * @param path
 */
export const setCookie = (name, value, expireDays = 90, path = '/') => {
  const d = new Date();
  d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=${path}`;
};

/**
 * @name deleteCookie
 * @description delete a cookie
 * @author Reza Erami
 * @param name
 */
export const deleteCookie = name => {
  const expires = 'expires=Thu, 01 Jan 1970 00:00:01 GMT';
  document.cookie = `${name}=${null};${expires}`;
};
