/**
 * @function
 * @name getCookie
 * @desc Gives us a cookie by name
 * @param   key       {string}    name of the cookie you want
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
 * @function
 * @name setCookie
 * @description Sets a cookie
 * @param name          {string}      name of the cookie
 * @param value         {string}      value of the cookie
 * @param expireDays    {number}      number of the days that cookie could be valid
 * @param path          {string}      path of the cookie to set
 */
export const setCookie = (name, value, expireDays = 90, path = '/') => {
  const d = new Date();
  d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=${path}`;
};

/**
 * @function
 * @name deleteCookie
 * @description deletes a cookie
 * @author Reza Erami
 * @param name    {string}    name of the cookie you want to delete
 */
export const deleteCookie = (name, path = '/') => {
  const expires = 'expires=Thu, 01 Jan 1970 00:00:01 GMT';
  document.cookie = `${name}=${null};${expires};path=${path}`;
};

/**
 * @function
 * @name makeCookieString
 * @description converts the key-value cookie into concatenated cookie string
 * @param  cookies    {object}    object of cookies you want to convert too cookie string
 * @return {string}
 */
export const makeCookieString = cookies => {
  let cookieString = '';
  Object.keys(cookies).forEach(cookie => {
    cookieString += `${cookie}=${cookies[cookie]}; `;
  });

  cookieString = cookieString.substr(0, cookieString.length - 2);
  return cookieString;
};
